install node
install npm
npm install express

start: "node xxxxx.js"

---------------------------------------

var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8080);



console.log("Running at Port 8080");

--------------------------------------------------

var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);

console.log("Running at Port http://localhost:8080"); -->


proyecto en modo prueba por ello es necesario refrescar ante cada operacion o f5