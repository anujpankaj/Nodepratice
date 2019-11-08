const path = require('path');
const express = require('express');

const rootDir = require('../Util/path');
const adminData = require('./admin');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
//--Get all Product--
router.get('/products', shopController.getProducts);
//Get product detial
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postDeleteCart);

router.post('/create-order', shopController.postOrder)

router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);

module.exports = router;