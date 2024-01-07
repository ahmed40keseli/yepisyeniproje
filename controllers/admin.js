const Product = require('../models/product'); /* Product modülünü product dosyası aracılığı ile import eder  */
const Category = require('../models/category'); /* Category modülünü category dosyası aracılığı ile import eder */
const Writer = require ('../models/writer');

exports.getProducts = (req, res, next) => {
    Product.findAll()
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
    Category.findAll() /* tablonun tamamını getirir  */
        .then((categories,writers) => {
            res.render('admin/add-product', {
                title: 'New Product',
                path: '/admin/add-product',
                categories: categories,
            });
        })
        .catch(err => {
            console.error('Error:', err);
            res.status(500).send('Internal Server Error');
        });
}


exports.postAddProduct = (req, res, next) => {
    const writerName = req.body.writername; /* sayfadan gelen writerid verisini benim oluşturduğum writerid ismine atar */
    const bookname = req.body.bookname; /* sayfadan gelen bookname verisini benim oluşturduğum bookname ismine atar  */
    const categoryid = req.body.categoryid; /* sayfadan gelen categoryid verisini benim oluşturduğum categoryid ismine atar  */
    Writer.findOrCreate({
        where: { name: writerName }
    }).then(([writer, created]) => {
        Product.create({
            writerId: writer.id, 
            bookname: bookname,
            categoryId: categoryid,
        }).then(result => {
            res.redirect('/admin'); /* sayfa ile işimiz bittiğinde bizi admin ana sayfasına(/admin) yönlendirir */
        }).catch(err => {
            console.log(err);
        });
    }).catch(err => {
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

    const writerid = req.body.writerid;
    const bookname = req.body.bookname;
    const categoryid = req.body.categoryid;
    
    Product.findByPk(id)
        .then(product => {
            product.writerId = writerid;
            product.bookname = bookname;
            product.categoryId= categoryid;
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