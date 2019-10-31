const fs = require('fs');
const path = require('path');
const roolDir = require('../Util/path');

const p = path.join(roolDir, 'data', 'product.json');

const getProductFromFile = cb => {   
    fs.readFile(p, (err, filecontent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(filecontent));
        }
    });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price =price;
    }
    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}