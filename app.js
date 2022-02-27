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

app.use(adminRoute)
app.use(shopRoute)

app.listen(3000)