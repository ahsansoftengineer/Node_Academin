const { DataTypes } = require('@sequelize/core');
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
    title: DataTypes.STRING,
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }
);
module.exports = Product