const express = require('express');
const router = express.Router();

// const path = require('path');

const adminController = require('../controllers/admin');


// router.get('/', (req, res, next) => {
//     res.render('views/user/index');
// });

router.get('/products', adminController.getProducts);

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products/:productid', adminController.getEditProduct);

router.post('/products', adminController.postEditProduct);

console.log(adminController);

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const adminController = require('../controllers/admin');

// router.get('/products', adminController.getProducts);

// router.get('/add-product', adminController.getAddProduct);

// router.post('/add-product', adminController.postAddProduct);

// router.get('/products/:productid', adminController.getEditProduct);

// router.post('/products', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

// module.exports = router;