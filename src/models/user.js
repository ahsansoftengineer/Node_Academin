const { DataTypes } = require("@sequelize/core");
const sequelize = require("../util/database");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING
})
module.exports = User