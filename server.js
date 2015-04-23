// grab express
var express = require('express');

// create an express app
var app = express();

//create an express route for the home page
// http://localhot:8080
app.get('/', function(req, res){
   res.sendfile('index.html');
});
// start the server on port 8080
app.listen(8080);
//send a message
console.log('server has started');
