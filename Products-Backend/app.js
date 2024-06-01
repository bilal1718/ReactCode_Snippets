const http = require('http');
const productsService = require("./productsService");
const getRequestData = require('./utils');
const PORT = 5000;

const server = http.createServer(async (req, res) => {
  if (req.url == "/api/v1/products" && req.method === "GET") {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(productsService.getProducts()));
  }
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split('/')[4];
    productsService.getProductsById(id, (err, product) => {
      if (product) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(product);
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product not found' }));
      }
    });
  }
  else if (req.url === '/api/v1/products' && req.method === "POST") {
    try {
      const req_body = await getRequestData(req);
      const newProduct = JSON.parse(req_body);
      productsService.saveProduct(newProduct, (err, products) => {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newProduct));
      });
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid data' }));
    }
  }
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === "PUT") {
    try {
      const id = req.url.split('/')[4];
      const req_body = await getRequestData(req);
      const updatedProduct = JSON.parse(req_body);
      productsService.updateProduct(id, updatedProduct, (err, products) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Product not found' }));
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(updatedProduct));
        }
      });
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid data' }));
    }
  }
  else if (req.url.match(/\/api\/v1\/products\/([0-9]+)/) && req.method === "DELETE") {
    const id = req.url.split('/')[4];
    productsService.deleteProduct(id, (err, products) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product not found' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Product deleted successfully' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
