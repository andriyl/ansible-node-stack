const http      = require('http');
const hostname  = '127.0.0.1';
const port      = 5000;

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
})
.listen(port, () => {
  console.log(`Server running at http://${port}/`);
});
