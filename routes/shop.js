const express = require('express');

const shop = require('../controllers/shop')

const router = express.Router();

router.get('/', shop.index);
router.get('/products', shop.gets);
router.get('/cart', shop.getCart);
router.get('/checkout', shop.getCheckout);

exports.routes = router;
