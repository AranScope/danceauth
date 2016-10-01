var express = require('express');
var io = require('socket.io')();
var Client = require('./Client.js');

var app = express();

var auth_data = [];
var clients = {};

/*

*/

app.get('/', function(req, res) {
	res.send(clients);
});

io.on('connection', function(socket){

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
