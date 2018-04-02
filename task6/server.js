const http = require('http');

http.createServer(function (req, resp) {
    console.log('hello');
    resp.write("Hi");
    resp.end();
}).listen('5050');