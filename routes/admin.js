const path = require('path');
const express = require('express');

const rootDir = require('../Util/path');

const productsController = require('../controllers/products');

const router = express.Router();



router.get('/add-product', productsController.getAddProduct);

router.post('/product', productsController.postAddProduct);

//exports.routers = router;
//exports.products = products;
module.exports =router;