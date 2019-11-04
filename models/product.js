const fs = require('fs');
const path = require('path');
const roolDir = require('../Util/path');
const cart = require('./cart');
const db = require('../Util/database');

const p = path.join(roolDir, 'data', 'product.json');

module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save(cb) {
        db.query(
            'INSERT INTO salesforce."Products" (title, price, description, "imageUrl") VALUES($1, $2, $3, $4);',
             [this.title, this.price, this.description, this.imageUrl], (err, result) =>{
                if(err){
                    console.log(err);
                    cb();
                    return;
                }
                cb(result);
             });

    }
    static fetchAll(cb){
         db.query('SELECT * FROM salesforce."Products";',(err, result) =>{
            if(err){
                console.log(err);
                cb();
                return;
            }
            cb(result);
         });
    }
    static findById(id, cb) {
        db.query('SELECT * FROM salesforce."Products" WHERE id = $1;', [id], (err, result) =>{
            if(err){
                console.log(err);
                cb();
                return;
            }
            cb(result);
         });
    }

    static deleteById(Id) {

    }
}