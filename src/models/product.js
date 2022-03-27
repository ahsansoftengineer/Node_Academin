const mongodb = require('mongodb')
const db = require('../util/database').getDB;
// As of Max
class Product{
  constructor({title, price, imageUrl, description}){
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save(){
    return db().collection('products')
      .insertOne(this)
      .then(console.log)
      .catch(console.error)
  }
  static gets(){
    return db().collection('products')
      .find()
      .toArray()
      .then(data => {
        console.log('gets worked')
        return data
      })
      .catch(console.error)
  }
  static get(prodId){
    return db().collection('products')
      .find({_id: new mongodb.ObjectId(prodId)})
      .next()
      .then(data => {
        console.log('get worked')
        return data;
      })
      .catch(console.error)
  }
}
// Correct Way of Exporting Single Item from a File
module.exports = Product;