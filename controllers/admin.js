const Product = require('../models/product');
const Category = require('../models/category');


exports.getAddProduct = (req, res, next) => {
    Category.getAll()
        .then((categories) => {
            res.render('admin/add-product', {
                title: 'New Product',
                path: '/admin/add-product',
                categories: categories[0]
            });
        })
        .catch((err) => {
            console.log(err);
        });

}

exports.postAddProduct = (req, res, next) => {
    const product = new Product();

    product.authorname = req.body.authorname;
    product.bookname = req.body.bookname;
    product.categoryid = req.body.categoryid;

    product.saveProduct()
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}