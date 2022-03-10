// As of Documentation
const { Sequelize } = require('@sequelize/core');

// Option 1: Passing a connection URI
const sequelize1 = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize2 = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize3 = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// Option 3: Passing parameters separately (other dialects)
const sequelize4 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql' /* 'mariadb' | 'postgres' | 'mssql' */
});