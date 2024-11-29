const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method.toUpperCase();

  // Handle routes
  if (method === 'GET' && path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (method === 'GET' && path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About Page</h1>');
  } else if (method === 'GET' && path.startsWith('/products/')) {
    const productId = path.split('/')[2]; // Extract the dynamic part of the URL
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Product Page for Product ID: ${productId}</h1>`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
