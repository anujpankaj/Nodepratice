const fs = require('fs');
const path = require('path');
const roolDir = require('../Util/path');

const p = path.join(roolDir, 'data', 'product.json');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }
    save() {
        //products.push(this);       
        fs.readFile(p, (err, filecontent) =>{
            var products =[];
            if(!err){
                products = JSON.parse(filecontent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        fs.readFile(p, (err, filecontent)=>{
                if(err){
                    cb[[]];
                }
                cb[JSON.parse(filecontent)];
        });
    }
}