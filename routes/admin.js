// const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');

const router = express.Router();

const productAdd = require('../controllers/products')
const products = [];

// /admin/add-product => GET
router.get('/add-product', );

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
