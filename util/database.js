// To Connect to Data base Create Connection Pool
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-academind',
    password: 'ahsan@aam'
});

module.exports = pool.promise();