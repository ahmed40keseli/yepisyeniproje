// const express = require('express');
// const app = express();

// const path = require('path');

// const bodyParser = require('body-parser');

// const adminroutes = require('./routes/admin');
// const userroutes = require('./routes/shop');
// // const errorcontroller = require('/routes/error');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminroutes);
// app.use(userroutes);

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});
