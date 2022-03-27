const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mangoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://NodeMangoUserName:NodeMangoPassword@nodeclustername.2x8oc.mongodb.net/NodeMongoDataBase?retryWrites=true&w=majority'
  ).then(client => {
    console.log('Connected!');
     // Database can also be passed here
     // If Database Not created as soon as we write something in database it creates it.
    _db = client.db();
    callback(client);
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
}
const getDB = () => {
  if(_db) {
    return _db;
  }
  throw 'No database available'
}
// Correct Way of Exporting Multiple Items from a File
exports.mangoConnect = mangoConnect;
exports.getDB = getDB;