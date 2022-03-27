const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mangoConnect = () => {
  return MongoClient.connect(
    'mongodb+srv://NodeMangoUserName:NodeMangoPassword@nodeclustername.2x8oc.mongodb.net/NodeMongoDataBase?retryWrites=true&w=majority'
  ).then(client => {
    console.log('Connected!');
    _db = client.db();
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