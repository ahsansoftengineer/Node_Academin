// Node Modules
const http = require('http');

// Third Party Modules
const express = require('express');

app = express()

// app doesn't do anything for now
const server = http.createServer(app)

server.listen(3000);
