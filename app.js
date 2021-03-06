// create an express app
var express = require('express');
var path = require('path');
var handlebars = require('express3-handlebars');
var http = require('http');

var login = require('./routes/login');
var index = require('./routes/index');
var addTask = require('./routes/addtask');
var friends = require('./routes/friends');
var createTask = require('./routes/createtask');

var app = express()

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// use the express-static middleware
app.use(express.static('static'));


// Add routes here
app.get('/', login.view);
app.get('/index', index.view);
app.get('/addtask', addTask.view);
app.post('/createtask', createTask.createtask);
app.get('/friends', friends.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});