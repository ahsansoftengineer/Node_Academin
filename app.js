// Node Modules
const http = require('http');

// Third Party Modules
const express = require('express');

app = express();
app.use((req, res, next)=>{
  console.log('in middleware');
  next();
})
app.use((req, res, next)=>{ 
  
  console.log('another middleware'); 
  // res.send({"name": "Ahsan"});
  res.send('<h1>Hello from Express </h1>');
})
// app doesn't do anything for now
app.listen(3000) // Alternative to below Code
// const server = http.createServer(app)
// server.listen(3000);
