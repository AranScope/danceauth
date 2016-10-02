var express = require('express');
var io = require('socket.io')();
var Client = require('./Client.js');

var app = express();

var auth_data = [];
var clients = {};

/*

*/


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
});

app.get('/', function(req, res) {
	res.send(clients);
});

io.on('connection', function(socket){

	socket.on('message', function(message) {
		console.log('message');
		console.log(message);
		if(message == "STOP_AUTH") {
			socket.emit('auth', clients['dab'].is_auth());
		} else if(message = "STOP_TRAIN") {
			console.log(clients['dab'].moves);
		}
	});

	socket.on('training', function(data) {
		console.log('training');
		if(!clients.hasOwnProperty(data.username)) {
			clients[data.username] = new Client(data.username);	
		} 
		clients[data.username].train(data);
	});
	
	socket.on('auth', function(data) {
		clients[data.username].auth(data);
	});
	
	socket.on('delete', function(data) {
		console.log('delete');
		//clients[data.username].delete(data);;
	});
});

io.listen(3004);
app.listen(3005);
