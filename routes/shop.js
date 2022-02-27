const express = require('express');
const path = require('path')

const router = express.Router();

// could be replaceble with use
router.get('/', (req, res, next) => {
  console.log('/', 'Last Middleware');
  // res.send('<h1>Final Middleware</h1>')
  // __dirname global Variable provide absolute path on our
  // operating system to this folder
  // path.join works on both windows / linq system
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
  // next();
});

module.exports = router