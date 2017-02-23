var express = require('express')
var app = express()
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Host the book.
app.use(express.static(path.join(__dirname, 'bookExpress')));

/*
 var router = express.Router();
  module.exports = router; 
*/

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Escuchando en http://%s:%s', host, port)

})
