const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  } else {
    res.writeHead(405, {'Allow': 'GET'});
    res.end('Method Not Allowed');
  }
}).listen(3000);
