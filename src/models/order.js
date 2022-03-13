const { DataTypes } = require("@sequelize/core");
const sequelize = require("../util/database");

const Order = sequelize.define(
  'order', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    }
  }
)
module.exports = Order