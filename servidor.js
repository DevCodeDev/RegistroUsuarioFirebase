var express = require("express");
var app     = express();

app.use(express.static(__dirname + '/public'));
app.listen(8080);

console.log("Running at Port http://localhost:8080");