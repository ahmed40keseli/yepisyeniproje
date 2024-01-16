const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);


app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const accountRoutes = require('./routes/account');

const sequelize = require('./utility/database');

// const options = {
// 	host: 'localhost',
// 	port: 3000,
// 	user: 'root',
// 	password: 'Ah123?kkk',
// 	database: 'node2-app'
// };

// const connection = mysql.createConnection(options);

// const sessionStore = new MySQLStore(options);

// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       return;
//     }

// console.log('Connected to MySQL');

// const sessionStore = new MySQLStore({}

// connection.on('error', (err) => {
//     console.error('MySQL connection error:', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.log('Reconnecting to MySQL...');
//       connection.connect();
//     } else {
//       throw err;
//     }
//   });

//   app.use(session({
//     key: 'session_cookie_name',
//     secret: 'your_secret_key',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 24, // 1 day
//     },
//   }));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//     secret:'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         maxAge: 3600000
//     },
//     store : options
// }));
// app.use(express.static(path.join(__dirname, 'public')));

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

// mongoose.connect(ConnectionString)
//     .then(() => {
//         console.log('connected to mongodb');

//         User.findOne({ name: 'sadikturan' })
//             .then(user => {
//                 if (!user) {

//                     user = new User({
//                         name: 'sadikturan',
//                         email: 'email@gmail.com',
//                         cart: {
//                             items: []
//                         }
//                     });
//                     return user.save();
//                 }
//                 return user;
//             })
//             .then(user => {
//                 console.log(user);
//                 app.listen(3000);
//             })
//             .catch(err => { console.log(err) });
//     })
//     .catch(err => {
//         console.log(err);
//     })