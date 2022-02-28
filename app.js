const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Templating Engine HandleBar is not Working
var exphbs  = require('express-handlebars');

var hbs = exphbs.create({ extname: '.hbs' /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// Templating Engine PUG
// app.set('view engine', 'pug');
// app.set('views', 'views'); // Default for Pug

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
