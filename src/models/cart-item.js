const { DataTypes } = require('@sequelize/core');
const sequelize = require("../util/database");

const CartItem = sequelize.define(
  'cart', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    quantity: DataTypes.INTEGER
  }
)
module.exports = CartItem