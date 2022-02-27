// Node Modules
const http = require('http');

// Third Party Modules
const express = require('express');
const bodyParser = require('body-parser')

// Custom Files
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute)
app.use(shopRoute)
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000)