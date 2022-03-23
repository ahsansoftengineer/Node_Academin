const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = callback => {
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
const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database available'
}
module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;