const Sequelize = require('sequelize')

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
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