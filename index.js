const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
      fs.readFile('./index.html', 'utf8', function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-type': 'text/html' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        return res.end(data);
      });
    } else if (url === '/contact-me') {
      fs.readFile('./contact-me.html', 'utf8', function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-type': 'text/html' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        return res.end(data);
      });
    } else if (url === '/about') {
      fs.readFile('./about.html', 'utf8', function (err, data) {
        if (err) {
          res.writeHead(404, { 'Content-type': 'text/html' });
          return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        return res.end(data);
      });
    }
  })
  .listen(8080);
