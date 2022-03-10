# Node_Academin
### Connecting to MYSQL
1. Install MySql in PC
2. Install MySql2 in Project
```script
 npm i mysql2 --save
```
3. Getting Data by using connection Pool
#### Option 1 (Step 1)
##### (Step 1)
** util/database.js
```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-academind',
    password: 'passwordGoesHere'
});
```
##### (Step 2) 
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
#### Option 2 
##### (Step 1)
** util/database.js
```javascript
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'passwordGoesHere'
});
```
##### (Step 2)
** app.js
```javascript
const connection = require('./util/database');
connection.execute(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Rick C-137', 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    // If you execute same statement again, 
    /// it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);
```

