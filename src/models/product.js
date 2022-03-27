const mongodb = require('mongodb')
const db = require('../util/database').getDB;
// As of Max
class Product{
  constructor({title, price, imageUrl, description, productId}){
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    productId ? this._id = new mongodb.ObjectId(productId): null
  }
  save(){
    let action
    let coll = db().collection('products')
    if(this._id){
      action = coll.updateOne(
        {_id: this._id},
        {$set: this})
    }else {
      action = coll.insertOne(this)
    }
    return action
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
  static delete(prodId){
    return db().collection('products')
      .deleteOne({_id: new mongodb.ObjectId(prodId)})
      .then(data => {
        console.log('deleteOne')
      })
      .catch(console.error)
  }
}
// Correct Way of Exporting Single Item from a File
module.exports = Product;