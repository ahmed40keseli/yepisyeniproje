const Product = require('../models/product');
const Category = require('../models/category');

exports.getProducts = (req, res, next) => {
    Product.getAll()
        .then(products => {
            res.render('admin/products', {
                title: 'Admin Products',
                products: products[0],
                path: '/admin/products',
                action: req.query.action
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        title: 'New Product',
        path: '/admin/add-product'
    });
    console.log('get add-product');
}

exports.postAddProduct = (req, res, next) => {
    console.log('---------------<<<<<<<<<<<<<<post add-product');

    const authorname = req.body.authorname;
    console.log(`---------------<<<<<<<<<<<<<<post ${authorname}`);
    const bookname = req.body.bookname;
    console.log(`---------------<<<<<<<<<<<<<<post ${bookname}`);

    const prd = Product.build({
        authorname: authorname,
        bookname: bookname,
        // categoryid: categoryid,
    });
    console.log(`---------------<<<<<<<<<<<<<<post ${prd}`);

    prd.save()
        .then(result => {
            console.log(`---------------<<<<<<<<<<<<<<post ${result}`);
            res.redirect('/admin');
        })
        .catch(err => {
            console.timeLog(err);
            res.status(500).send('Error occurred while saving data');

        })
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
                        product: product[0][0],
                        categories: categories[0]
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

    const product = new Product();

    product.authorname = req.body.authorname;
    product.bookname = req.body.bookname;
    // const categoryid = req.body.categoryid;

    Product.Update(product)
        .then(() => {
            res.redirect('/admin/products?action=edit');
        })
        .catch((err) => {
            console.log(err);
        });
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