const { DataTypes, Model } = require('@sequelize/core');
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);
module.exports = Product
// As of Documentation
// class Product extends Model {
//   id;
//   title;
//   price;
//   imageUrl;
//   description;
// }
// Product.init({
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: DataTypes.STRING,
//   price: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// }, {
//   sequelize,
//   // modelName: 'Product',
//   // freezeTableName: true

// });

// module.exports = Product

