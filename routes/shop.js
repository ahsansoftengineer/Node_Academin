const express = require('express');

const product = require('../controllers/products')

const router = express.Router();

router.get('/', product.listGet);

exports.routes = router;
