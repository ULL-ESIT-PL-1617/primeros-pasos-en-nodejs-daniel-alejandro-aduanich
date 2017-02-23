var express = require('express')
var app = express()
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  //Modificado un poco 
  res.render('index', function(err, html));
})

/*
 var router = express.Router();
  module.exports = router; 
*/

var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
