const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// 1. Templating Engine EJS
app.set('view engine', 'ejs');
const error = require('./controllers/error')
const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', admin.routes);
app.use(shop.routes);
app.use(error.get404);
app.listen(3000);
