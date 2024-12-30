const http = require('http');
/*
creates a small HTTP server using the http module
It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
Displays Hello ALX! in the page body for any endpoint as plain text
*/

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello ALX!');
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
