const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    Product.getAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Products',
                products: products,
                path: '/admin/products',
                action: req.query.action
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getAddProduct = (req, res, next) => {
    Category.findAll()
        .then((categories) => {
            console.log(categories);
            res.render('admin/add-product', {
                title: 'New Product',
                path: '/admin/add-product',
                categories:categories
            });
        })
}

exports.postAddProduct = (req, res, next) => {
    const authorname = req.body.authorname;
    const bookname = req.body.bookname;
    const categoryid = req.body.categoryid;

    Product.create({
        authorname: authorname,
        bookname: bookname,
        categoryId: categoryid,
    })
        .then(result => {
            res.redirect('/admin');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getEditProduct = (req, res, next) => {

    Product.getById(req.params.productid)
        .then((product) => {
            Category.getAll()
                .then((categories) => {
                    console.log(categories);
                    res.render('admin/edit-product', {
                        title: 'Edit Product',
                        path: '/admin/products',
                        product: product,
                        categories: categories
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.postEditProduct = (req, res, next) => {

    const authorname = req.body.authorname;
    const bookname = req.body.bookname;
    const categoryid = req.body.categoryid;

    Product.findByPk(id)
        .then(product => {
            product.authorname = authorname;
            product.bookname = bookname;
            product.categoryId = categoryid;
            return product.save();
        })
        .then(result => {
            console.log('updated');
            res.redirect('/admin/products?action=edit');
        })
        .catch(err => console.log(err));
}


exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productid)
        .then(() => {
            res.redirect('/admin/products?action=delete');
        })
        .catch((err) => {
            console.log(err);
        });
}