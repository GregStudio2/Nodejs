var http = require('http');

var server = http.createServer(function (request, response) {
    response.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");