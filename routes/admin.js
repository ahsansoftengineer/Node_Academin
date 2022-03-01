const express = require('express');

const router = express.Router();

const product = require('../controllers/products')
const products = [];

// /admin/add-product => GET
router.get('/add-product', product.addGet);

// /admin/add-product => POST
router.post('/add-product', product.addPost);
exports.routes = router;
exports.products = products;
