var express = require('express');
var app = express()
var path = require('path');


app.set('port', (process.env.PORT || 5000));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Host the book.
app.use(express.static(path.join(__dirname, 'bookExpress')));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
/*
 var router = express.Router();
  module.exports = router;
*/
