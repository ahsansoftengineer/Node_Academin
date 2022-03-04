const express = require('express');

const router = express.Router();

const admin = require('../controllers/admin')
const products = [];

// router.get('/products', admin.productListGet);
router.get('/product-list', admin.productListGet);

router.get('/product-add', admin.productAddGet);
router.post('/product-add', admin.productAddPost);

router.get('/product-edit', admin.productEditGet);
router.post('/product-edit', admin.productEditPost);
exports.routes = router;
exports.products = products;
