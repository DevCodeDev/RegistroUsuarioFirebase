const express = require('express');
const fs = require('fs');
var http = require('http');

// function onRequest(request, response){
//     console.log("Peticion recibida");
//     response.writeHead(200, {'content-type': 'text/html'});
//     response.write('Hola mundo!!');
//     response.end();
// }
//var server = http.createServer(onRequest);
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
  
    var file = fs.createReadStream('index.html');
    file.pipe(response);
  
  }).listen(8080);

//server.listen(8080);

console.log("Servidor funcionando en http://localhost:8080");