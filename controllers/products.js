const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: 'add-product',
        productCSS : true,
        activeAddProduct :true
    })
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    //res.send('<h1>Hello from Express</h1>');
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views', 'shop.html'))
    //const products = adminData.products;
    Product.fetchAll((products) =>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProduct: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};