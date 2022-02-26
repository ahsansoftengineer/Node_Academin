const http = require('http');

// 1. Creating a Server
const server = http.createServer((req, res) => {
  console.log(req)
  // 3. Only Execute the Server only once
  // process.exit()
})
// 2. Specifying the Port Where it has to listen
server.listen(3000)
// 3. Run the following Command
// node app-1.js

 