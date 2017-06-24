var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//var route_index = require('./routes/index')(express);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set('port', (process.env.PORT || 3001));
const PORT = process.env.PORT || 3001

//app.use('/',route_index);

app.get('/', function (req, res) {
  console.log("ここまでOK");
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(3001,function(){
    console.log("Running on port 3001 ...")
});