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
	
		socket.emit('message', message);
	});

	socket.on('add-user', function(data) {
		clients.set(username, new Client(data.username));
	});

	socket.on('start-training', function(data) {
		clients[data.username].start-training();
	});

	socket.on('stop-training', function(data) {
		clients[data.username].stopTraining();
	});

	socket.on('add-training', function(data) {
		clients[data.username].addTraining(data.skeleton);
	});
	
	socket.on('start-auth', function(data) {
		clients[data.username].startAuth();
	});

	socket.on('stop-auth', function(data) {
		clients[data.username].stopAuth();
	});

	socket.on('add-auth', function(data){
		clients[data.username].addAuth(data.skeleton);
	});

	socket.on('reset', function(username) {
		clients[username].reset();
	});

});

io.listen(3004);
app.listen(3005);
