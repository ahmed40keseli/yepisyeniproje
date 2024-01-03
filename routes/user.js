const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'views', 'user/index.pug'));
// });

router.get('/', userController.getIndex);

router.get('/products', userController.getProducts);

router.get('/products/:productid', userController.getProduct);

router.get('/categories/:categoryid', userController.getProductsByCategoryId);

// router.get('/cart', userController.getCart);

// router.get('/orders', userController.getOrders);

console.log(`${userController}yönlendirme yapılıyorrrrrrrrrrrrrrrrrr`);

module.exports = router;