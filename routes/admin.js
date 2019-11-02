const path = require('path');
const express = require('express');

const rootDir = require('../Util/path');

const adminController = require('../controllers/admin');

const router = express.Router();



router.get('/add-product', adminController.getAddProduct);

router.get('/adminproducts', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/deleteproduct', adminController.postDeleteProduct);

//exports.routers = router;
//exports.products = products;
module.exports =router;