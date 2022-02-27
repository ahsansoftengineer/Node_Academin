// Node Modules
const http = require('http');

// Third Party Modules
const express = require('express');
const bodyParser = require('body-parser')

app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/', (req, res, next) => {
  console.log('/', 'This always runs!');
  // res.redirect('/add-product');
  next();
});

app.get('/add-product', (req, res, next) => {
  console.log('/add-product');
  res.send(`
    <form action='/product' method='post'>
      <input type='text' name='title' />
      <button type='submit'>Submit</button>
    </form>
  `)
});

app.post('/product', (req, res, next) => {
  console.log('/product');
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  console.log('/', 'Last Middleware');
  // Some Process
  next();
})
app.use((req, res, next)=>{ 
  // res.send({"name": "Ahsan"});
  res.send('<h1>Last Middleware </h1>');
})
app.listen(3000)