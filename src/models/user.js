const mongodb = require('mongodb');
const Product = require('./product');
const db = require('../util/database').getDB;
class User {
  constructor({name, email, cart, id}){
    this.name = name;
    this.email = email
    id ? this._id = new mongodb.ObjectId(id): null
    this.cart = cart``
  }
  save(){
    let action
    let coll = db().collection('users')
    if(this._id){
      action = coll.updateOne(
        {_id: this._id},
        {$set: this})
    }else {
      action = coll.insertOne(this)
    }
    return action
      .then(() => {
        console.log('save user worked')
      })
      .catch(console.error)
  }
  saveCart(product){
    // const cartProduct = this.cart.items.findIndex(cp =>{
    //   return cp._id === Product._id
    // })
    // Part 197 Adding Cart Item
    const cart = {items: [{product, quantity: 1}]}
    return db().collection('users').updateOne(
      {id: this._id},
      {$set: {cart}}

    )
  }
  static get(id){
    return db().collection('users')
      .findOne({_id: new mongodb.ObjectId(id)})
      .then(data => {
        console.log('get user worked')
        return data;
      })
      .catch(console.error)
  }
}
module.exports = User;
