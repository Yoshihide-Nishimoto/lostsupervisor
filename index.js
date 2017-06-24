var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//var server = http.createServer(function(request, response) {

//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello Azure!!");

//});

var port = process.env.PORT || 1337;
//server.listen(port);

app.get('/', function (req, res) {
  console.log("ここまでOK");
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(port,function(){
    console.log("Running on port " + port);
});