var http = require('http');

function onRequest(request, response){
    console.log("Peticion recibida");
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('Hola mundo!!');
    response.end();
}
var server = http.createServer(onRequest);
server.listen(8080);

console.log("Servidor funcionando en http://localhost:8080");