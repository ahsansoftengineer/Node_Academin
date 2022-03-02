const express = require('express');

const product = require('../controllers/shop')

const router = express.Router();

router.get('/', product.listGet);
router.get('/products', product.listGet);
router.get('/cart', product.listGet);
router.get('/checkout', product.listGet);

exports.routes = router;
