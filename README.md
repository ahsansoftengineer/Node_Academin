# Node_Academin
### Connecting to MYSQL
1. Install MySql in PC
2. Create a connection Pool
#### Step 1
** util/database.js
```javascript
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-academind',
    password: 'passwordGoesHere'
});
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
