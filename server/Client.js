var min = 14000;
var max = 75000;

var Client = function(name) {
	this.name = name;
	this.moves = {};
	this.authmove = [];
}

Client.prototype.train = function(data) {
	if(!this.moves.hasOwnProperty(data.movename)) {
		this.moves[data.movename] = [];
	}
	this.moves[data.movename].push(data.skeleton);	
}

Client.prototype.auth = function(data) {
	this.authmove.push(data.skeleton);
}

Client.prototype.is_auth = function() {
	var best_diff = 10000000;
	var best_move = "";
		
	for(move_key in this.moves) {
		var move = this.moves[move_key];
		var diff = 0;

		for(index = 0; index < move.length; index++) {
			for(partindex in move[index]) {
				var skel1 = move[index];
				var skel2 = this.authmove[index];
				if(skel1.hasOwnProperty(index) && skel2.hasOwnProperty(index)) {
					var part1 = skel1[partindex];
					var part2 = skel2[partindex];
					//console.log('skel1: ' + JSON.stringify(skel1));
					//console.log('skel2: ' + JSON.stringify(skel2));
					// diff stuff
					diff += Math.sqrt(Math.pow(part2.position[0] - part1.position[0], 2) + Math.pow(part2.position[1] - part1.position[1], 2));
				}			
			}
		}

		if(diff < best_diff) {
			best_diff = diff;
			best_move = move_key;
		}
	}	
	
	console.log('best_diff: ' + best_diff);
	console.log('best_move: ' + best_move);
	this.authmove = [];
	
	return {
		move: best_move,
		successful: (best_diff < (max-min)/2)
	};
}

Client.prototype.delete = function(data) {
}

module.exports = Client;
