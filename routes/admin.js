const path = require('path')

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  console.log('/add-product');
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res, next) => {
  console.log('/product');
  console.log(req.body);
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
module.exports = router
