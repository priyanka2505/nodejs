var express = require('express');
var app = express();
var mongoose = require('mongoose');

 
mongoose.connect('localhost:27017/example');

app.use(express.static('public'));


//Routes
app.use(require('./routes'));  //http://localhost:8000/    http://localhost:8000/login


var server = app.listen(8000, function () {

  var host = server.address().address
  var port = server.address().port

 
  console.log("Example app listening at http:// ", host, port);

  

});


