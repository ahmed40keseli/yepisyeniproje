const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session')


app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const sequelize = require('./utility/database');
const accountRoutes = require('./routes/account');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     User.findOne({ name: 'sadikturan' })
//         .then(user => {
//             req.user = user;
//             next();
//         })
//         .catch(err => { console.log(err) });
// })

app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

const Category = require('./models/category');
const Product = require('./models/product');
const Writer = require('./models/writer');

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error/404.pug'));
});

Product.belongsTo(Writer, {
    foreignKey: {
        allowNull: false
    }
});

Writer.hasMany(Product);

sequelize
    .sync()
    .then(() => {
        Writer.count()
            .then(count=> {
                if (count===0){
                    Writer.bulkCreate([
                        { name: 'Cemil meriç ' },
                        { name: 'Imam gazali' },
                        { name: 'Ahmet ümit' },  
                    ]);
                }
            })
    })
    .catch(err => { /* catch elsenin karşılığı olarak düşünülebilir  */
        console.log(err); /* hata ayıklama satırı  */
    });



Product.belongsTo(Category,{ /* product da bir tane category vardır */
    foreignKey:{
        allowNull:false /* değerin boş gitmemesini sağlar */
    }
});
Category.hasMany(Product); /* kategoride birçok product vardır  */

sequelize
    // .sync({ force: true })
    .sync()
    .then(() => {
        Category.count()
            .then(count=> {
                if (count===0){
                    Category.bulkCreate([
                        { name: 'roman' },
                        { name: 'otobiyografi' },
                        { name: 'biyografi' },  
                    ]);
                }
            })
    })
    .catch(err => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});