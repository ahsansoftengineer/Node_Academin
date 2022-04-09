# 12 MangoDB
## MangoDB Server Settings
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
11. Choose your Driver and Version (Node-4.0)
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
## MangoDB Application Settings
1. Installing Mongo Client
```javascript
  npm i --save mongodb
  npm i --save-dev @types/mongodb
```

* > src/util/database.js (For Set up Connection String)
* > src/app.js ()
* > src/routes/admin.js 
* > src/controllers/admin.js
* > src/models/admin.js
* > src/views/admin/(CRUD)
3. Add Your Connection String in Code.
