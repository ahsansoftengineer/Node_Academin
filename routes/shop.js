const express = require('express');
const shop = require('../controllers/shop')
const router = express.Router();

router.get('/', shop.index);
router.get('/products', shop.gets);

router.get('/products/:id', shop.get); // Dynamic Routes
router.get('/cart', shop.getCart);
router.get('/orders', shop.getOrders);
router.get('/checkout', shop.getCheckout);

exports.routes = router;
