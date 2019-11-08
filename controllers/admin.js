const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: 'add-product',
        editing: false
    })
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user.createProduct({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description
    }).then(result => {
        console.log('Created product');
        res.redirect('/adminproducts');
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productid;
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedPrice = req.body.price;
    Product.findByPk(prodId)
        .then(product => {
            product.title = updatedTitle;
            product.imageUrl = updatedImageUrl;
            product.description = updatedDescription;
            product.price = updatedPrice;
            return product.save();
        })
        .then(result => {
            console.log('UPDATED PRODUCT!');
            res.redirect('/adminproducts');
        })
        .catch(err => {
            console.log(err);
        });



};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodid = req.params.productId;
    req.user
        .getProducts({ where: { id: prodid } })
        .then(products => {
            const product = products[0];
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: 'edit-product',
                editing: editMode,
                product: product
            })
        })
        .catch(err => {
            console.log(err)
        });

};

exports.getProducts = (req, res, next) => {
    req.user.getProducts()
        .then(products => {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/adminproducts'
            });
        })
        .catch(err => {
            console.log(err);
        });
};
exports.postDeleteProduct = (req, res, next) => {
    const prodid = req.body.productId;
    Product.findByPk(prodid)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            console.log('DESTROYED PRODUCT');
            res.redirect('/adminproducts');
        })
        .catch(err => {
            console.log(err);
        });

};