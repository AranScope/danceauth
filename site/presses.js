$("#addmove").click(function(){
	var move = prompt("What is the name of your move?","");
	var count = 3;
	var countid = setInterval(function() {
		console.log(count);
		document.getElementById("countdown").innerHTML = count--;
	}, 1000);

	setTimeout(function() {
		clearInterval(countid);
		document.getElementById("countdown").innerHTML = "";



		var id = setInterval(function() {
			sendTraining(move,getSkeleton());
		}, 30);

		setTimeout(function() {
			clearInterval(id);
			sendMessage("STOP_TRAIN");
		}, 5000);






	}, 4000);

	

	



	
});

$("#auth").click(function(){

	var count = 3;
	var countid = setInterval(function() {
		console.log(count);
		document.getElementById("countdown").innerHTML = count--;
	}, 1000);

	setTimeout(function() {
		clearInterval(countid);
		document.getElementById("countdown").innerHTML = "";



		var id = setInterval(function() {
			sendAuth(getSkeleton());
		}, 30);

		setTimeout(function() {
			clearInterval(id);
			sendMessage("STOP_AUTH");
		}, 5000);






	}, 4000);
});

