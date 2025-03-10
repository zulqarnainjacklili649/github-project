const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get the URL and query parameters
  const url = req.url;
  const params = new URLSearchParams(url);

  // Check if the request is for the homepage
  if (url === '/') {
    // If so, send the homepage HTML file
    fs.readFile('home.html', (err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  } else {
    // If not, return a 404 error
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
