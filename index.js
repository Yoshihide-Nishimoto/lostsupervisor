var http = require('http');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

//var server = http.createServer(function(request, response) {

//    response.writeHead(200, {"Content-Type": "text/plain"});
//    response.end("Hello Azure!!");

//});

var port = process.env.PORT || 1338;
//server.listen(port);

app.get('/', function (req, res) {
  console.log("root");
  res.render('index', { title: 'APIサンプル'});
});

app.get('/chart', function (req, res) {
  console.log("chart");
  res.render('chart');
});

app.listen(port,function(){
    console.log("Running on port " + port);
});