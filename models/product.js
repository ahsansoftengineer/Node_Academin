const Sequelize = require('sequelize');
const sequelize = require('../util/database')
// As of Max
const Product = sequelize.define(
  'product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }
);
module.exports = Product