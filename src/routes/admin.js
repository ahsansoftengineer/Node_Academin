const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => GET
router.get('/product-add', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/product-add', adminController.postAddProduct);




router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
