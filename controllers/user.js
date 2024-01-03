const Product = require('../models/product');
const Category = require('../models/category');

exports.getIndex = (req, res, next) => {
    console.log("get index founc run")
    const categories = Category.findAll();

    Product.findAll()
        .then(products => {
            res.render('user/index', {
                title: 'Library',
                products: products,
                categories: categories,
                path: '/'
            });
        })
        .catch((err) => {
            console.log(err);
        });
console.log(this.getIndex);
}

exports.getProducts = (req, res, next) => {
    const categories = Category.getAll();

    Product.getAll()
        .then(products => {
            res.render('user/products', {
                title: 'Products',
                products: products[0],
                categories: categories,
                path: '/'
            });
        console.log(getAll());
        })
        .catch((err) => {
            console.log(err);
        });
console.log(this.getProduct);       
}

exports.getProductsByCategoryId = (req, res, next) => {
    const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    const categories = Category.getAll();

    res.render('user/products', {
        title: 'Products',
        products: products,
        categories: categories,
        selectedCategory: categoryid,
        path: '/products'
    });
console.log(this.getProductsByCategoryId);
}




exports.getProduct = (req, res, next) => {
    Product.getById(req.params.productid)
        .then((product) => {
            res.render('user/product-detail', {
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
console.log(this.getProduct);        
}


// exports.getCart = (req, res, next) => {
//     res.render('user/cart', {
//         title: 'Cart',
//         path: '/cart'
//     });
// }

// exports.getOrders = (req, res, next) => {
//     res.render('user/orders', {
//         title: 'Orders',
//         path: '/orders'
//     });
// }