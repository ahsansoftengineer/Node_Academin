# 11 Squilize
### Connecting to MYSQL
1. Install MySql in PC
2. Create a connection Pool
```script
  npm i sequelize --save
  npm i @sequelize/core --save
``` 
#### Step 1
** util/database.js
```javascript
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'node-academind', // database
  'root', // user
  'ahsan@aam', // password
  {
    dialect: 'mysql', // different database has different dialed
    host: 'localhost' 
  }
);
module.exports = sequelize
```
#### Step 2 
** app.js
```javascript
const db = require('./util/database');
db.execute('SELECT * FROM products')
  .then(result => {
    console.log(result[0])
    console.log(result[1])
  })
  .catch(error => console.log);
```
