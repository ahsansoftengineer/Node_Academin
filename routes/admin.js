const express = require('express');

const router = express.Router();

const admin = require('../controllers/admin')
const products = [];

// router.get('/products', admin.productListGet);
router.get('/product-list', admin.productListGet);

// /admin/add-product => GET
router.get('/product-add', admin.productAddGet);
// /admin/add-product => POST
router.post('/product-add', admin.productAddPost);

exports.routes = router;
exports.products = products;
