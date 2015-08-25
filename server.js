var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes/routes.js');

app.use('/', routes);
app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port: ' + server.address().port);
});
