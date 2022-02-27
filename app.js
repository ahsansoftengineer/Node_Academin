// Node Modules
const http = require('http');
const path = require('path');

// Third Party Modules
const express = require('express');
const bodyParser = require('body-parser')

// Custom Files
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express();
const router = express.Router();
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoute)
app.use(shopRoute)
// router.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../','views','index'));
// })
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)