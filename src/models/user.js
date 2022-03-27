const mongodb = require('mongodb')
const db = require('../util/database').getDB;
class User {
  constructor(username, email, id){
    this.name = username;
    this.email = email
    id ? this._id = new mongodb.ObjectId(id): null
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
