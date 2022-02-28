const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 1. Templating Engine EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// 2. Templating Engine HandleBar
// Configuring Engine
// var exphbs  = require('express-handlebars');
// var hbs = exphbs.create({ 
//   extname: '.hbs',
//   layoutsDir: 'views/layouts/',
// 	defaultLayout: 'main',
// });
// app.engine('.hbs', hbs.engine);
// app.set('view engine', '.hbs');
// app.set('views', 'views');

// 3. Templating Engine PUG
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
