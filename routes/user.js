const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop/index.pug'));
    console.log('user yönlendirme deneme1');
});

console.log('user yönlendirme deneme2');

module.exports = router;