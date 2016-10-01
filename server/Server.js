var io = require('socket.io')();
var Client = require('Client.js');

var auth_data = [];
var clients = []

var current_client;

/*

*/

io.on('connection', function(socket){

	socket.on('add-user', function(data) {
		clients.push(username: new Client(data.username));
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

	socket.on('endauth', function(data) {
		socket.emit('auth', {
			loggedin: clients[data.username].auth();
		});
	});

	socket.on('reset', function(username) {
		clients[username].reset();
	});

});

io.listen(3000);