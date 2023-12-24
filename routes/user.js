const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop/index.pug'));
    console.log('user yönlendirme deneme1');
});

console.log('user yönlendirme deneme2');

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const shopController = require('../controllers/shop');

// router.get('/', shopController.getIndex);

// router.get('/products', shopController.getProducts);

// router.get('/products/:productid', shopController.getProduct);

// router.get('/categories/:categoryid', shopController.getProductsByCategoryId);

// router.get('/cart', shopController.getCart);

// router.get('/orders', shopController.getOrders);

// module.exports = router;