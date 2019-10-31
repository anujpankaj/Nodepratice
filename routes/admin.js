const path = require('path');
const express = require('express');

const rootDir = require('../Util/path');

const adminController = require('../controllers/admin');

const router = express.Router();



router.get('/add-product', adminController.getAddProduct);

router.get('/adminproducts', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

//exports.routers = router;
//exports.products = products;
module.exports =router;