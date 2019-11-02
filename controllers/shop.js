const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {

    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/products'
        });
    });
};

exports.getProduct =(req, res, next) => {
    const prodid = req.params.productId;
    Product.findById(prodid, product=>{
        res.render('shop/product-detail', {
            product: product, 
            pageTitle: product.title,
            path:'/products' 

        });
    });    
}

exports.getIndex = (req, res, next) => {

    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });

};

exports.getCart = (req, res, next) => {
    Cart.getCart(cart =>{
        Product.fetchAll(products =>{
            const cartProducts =[];
            for(product of products){
                const cartProductData =cart.products.find(prod => prod.id === product.id);
                if(cartProductData){
                    cartProducts.push({productData : product, qty : cartProductData.qty});
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                product : cartProducts
            });
        });       
    });   
};

exports.postCart = (req, res, next) => {
    const prodid = req.body.productId;
    Product.findById(prodid, (prodcut =>{
       Cart.addProduct(prodid, prodcut.price);
    }));
    console.log(prodid);
    res.redirect('/cart');
}

exports.postDeleteCart =(req, res, next) => {
    const productId = req.body.productId;
    Product.findById(productId, product =>{
        Cart.deleteProduct(productId, product.price);
        res.redirect('/cart');
    });
    

}

exports.getOrders = (req, res, next) => {
    res.render('shop/order', {
        path: '/orders',
        pageTitle: 'Your Orders',

    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    });
};