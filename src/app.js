
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const errorController = require('./controllers/error');
const User = require('./models/user');
// const SetRelation = require('./sql/relation');
const mangoConnect = require('./util/database').mangoConnect
// const { MongoClient } = require('mongodb');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Here we are setting up User Who ever making the Request
app.use((req, res, next) => {
  User.get('62409c31f214b229c2570ccf')
    .then(user => {
      req.user = user;
      next();
    })
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// SetRelation()
mangoConnect()
.then(() => {
  app.listen(3000);
})
.catch(console.error)

// app.use(errorController.get404);


// app.listen(3000);
