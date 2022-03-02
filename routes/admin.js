const express = require('express');

const router = express.Router();

const product = require('../controllers/admin')
const products = [];

router.get('/products', product.addGet);

// /admin/add-product => GET
router.get('/product-add', product.addGet);
// /admin/add-product => POST
router.post('/product-add', product.addPost);

exports.routes = router;
exports.products = products;
