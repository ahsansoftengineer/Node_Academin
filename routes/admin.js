const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
  console.log('/add-product');
  res.send(`
    <form action='/product' method='post'>
      <input type='text' name='title' />
      <button type='submit'>Submit</button>
    </form>
  `)
});
router.post('/product', (req, res, next) => {
  console.log('/product');
  console.log(req.body);
  res.redirect('/');
});
module.exports = router
