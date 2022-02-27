const express = require('express');

const router = express.Router();

// could be replaceble with use
router.get('/', (req, res, next) => {
  console.log('/', 'Last Middleware');
  res.send('<h1>Final Middleware</h1>')
  // Some Process HIFI 
  next();
});

module.exports = router