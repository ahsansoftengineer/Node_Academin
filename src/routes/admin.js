const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/products => GET
// router.get('/products', adminController.getProducts);
router.get('/product-add', adminController.getAddProduct);
router.post('/product-add', adminController.postAddProduct);
// router.get('/product-edit/:productId', adminController.getEditProduct);
// router.post('/product-edit', adminController.postEditProduct);
// router.post('/product-del', adminController.postDeleteProduct);

exports = router;
