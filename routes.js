const fs = require('fs');

var apiHitTime = 0
const routes = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  else if (url === '/message' && method === 'GET') {
    res.write('<html>');
    res.write('<head><title>Hit Post Request</title><head>');
    res.write(
      `<body>
        <h1>
          You can only make post request to this url
          <a href="/">Go Back</a>
        </h1>
        
      </body>`
    );
    res.write('</html>');
    return res.end();
  }
  else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // Blocking File
      fs.writeFileSync('message.txt', message)
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
      // None Blocking Pattern
      // fs.writeFile('message.txt', message, err => {
      //   res.statusCode = 302;
      //   res.setHeader('Location', '/');
      //   return res.end();
      // });
    });
  }
  console.log(req.url, method, ++apiHitTime)
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}
// 1. Simple Exporting Single Object
// module.exports = routes

// 2. Exporting Multiple Items in Individually
// exports.handler =  routes;
// exports.someText =  "Some Hard coded Text";

// 3. Multiple Exports in Single Object
module.exports = {
  handler: routes,
  someText: "my some text..."
}