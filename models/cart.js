const fs = require('fs');
const path = require('path');
const roolDir = require('../Util/path');

const p = path.join(roolDir, 'data', 'cart.json');

module.exports = class cart {
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, filecontent) => {
            var cart = { products: [], totalPrice: 0 };
            if (!err) {
                cart = JSON.parse(filecontent);
            }
            //Analyze  the cart => Find existing product
            const existingProductIndex = cart.products.findIndex(p => p.id === id);
            const existingproduct = cart.products[existingProductIndex];
            var updatedProduct;
            if (existingproduct) {
                updatedProduct = { ...existingproduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, filecontent) => {
            if (err) {
                return;
            }
            const updatedCart = { ...JSON.parse(filecontent) };            
            const product = updatedCart.products.find(prod => prod.id === id);
            if(!product){
                return;
            }
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => prod.id != id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.writeFile(p, JSON.stringify(updatedCart), (err) => {
                console.log(err);
            });

        });
    }
    static getCart(cb){
        fs.readFile(p, (err, filecontent) => {
            const cart = JSON.parse(filecontent);
            if(err){
                cb(null);
            }
            else{
                cb(cart);
            }
            
        });
    }
}