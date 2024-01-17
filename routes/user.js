const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getIndex);

router.get('/products', userController.getProducts);

router.get('/products/:productid', userController.getProduct);

router.get('/categories/:categoryid', userController.getProductsByCategoryId);

// router.get('/cart', userController.getCart);

// router.get('/orders', userController.getOrders);

module.exports = router;