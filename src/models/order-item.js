const { DataTypes } = require('@sequelize/core');
const sequelize = require("../util/database");

const OrderItem = sequelize.define(
  'orderItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  }
)
module.exports = OrderItem;