# 12 MangoDB
## Connecting to MangoDB
1. Create an Account using gmail
2. Create an Organisation (NodeOrganizationName)
* * Also can Add User for Org
3. Create Project (NodeProjectName)
* * Also Can Add User for Project
4. Build database
* * Choose your Package (Shared / Free)
* * Choose Region (Mumbai)
* * Set Cluster Name (NodeClusterName)
5. Create a User
* * Set User Name (NodeMangoUserName)
* * Password (NodeMangoPassword)
6. Set Where Would you Like to Connect From
* * My Local Environment
7. Set Current IP Address for Cluster
* * Allow Access from Anywhere
* * * Finish it
8. It will take a while to Create a Cluster
9. Connect to MangoDBCluster
10. Create a database and collection
* * NodeMongoDataBase
* * NodeMongoCollectionName
10. Choose your Driver and Version (Node-4.0)
11. Add Your Connection String in Code.
```javascript
"mongodb+srv://ahsansoftengineer:<password>@nodeclustername.0jgxh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```
or 
```javascript
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://NodeMangoUserName:NodeMangoPassword@nodeclustername.2x8oc.mongodb.net/NodeMongoDataBase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
```