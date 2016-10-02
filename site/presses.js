var movetemplate = '<button class="animated slideInRight sidebar-block sidebar-button"><span class="text-small">{{movename}}</span></button>';


function countdown(from, callback) {
		
		var count = from;

		console.log(count);
		document.getElementById("timer").innerHTML = count--;

		var countid = setInterval(function() {
			console.log(count);
			document.getElementById("timer").innerHTML = count--;
		}, 1000);

		setTimeout(function() {
			clearInterval(countid);
			
			callback();
		}, from*1000);

	}

$("#addmove").click(function(){

	function start_training(move) {
		countdown(3, function() {
		$("#timer-container").css("background-color", "#FFB03B");
		var id = setInterval(function() {
			sendTraining(move,getSkeleton());
		}, 30);

		countdown(5, function(){
			clearInterval(id);
			$("#timer-container").css("background-color", "#2C3E50");
			sendMessage("STOP_TRAIN");

			$('.animated').removeClass('animated');

			document.getElementById("auths").innerHTML += movetemplate.replace('{{movename}}', move);
		});


	});
	}


	swal({
	  title: "Dance Move",
	  text: "What is the name of your move?",
	  type: "input",
	  showCancelButton: true,
	  closeOnConfirm: false,
	  animation: "fade",
	  inputPlaceholder: "Write something",
	  confirmButtonColor: "#FFB03B"
	},
	function(inputValue){
	  if (inputValue === false) return false;
	  
	  if (inputValue === "") {
	    swal.showInputError("You need to write something!");
	    return false
	  }
	  
	  swal({
	  title: "Nice!",
	  text: "Now show us the " + inputValue + " in ...",
	  type: "success",
	  showCancelButton: false,
	  closeOnConfirm: true,
	  animation: "fade",
	  confirmButtonColor: "#FFB03B"

	}, function(confirm) {
		start_training(inputValue);
	});





	  
	});

	
});

$("#auth").click(function(){
	function start_auth() {
		countdown(3, function() {
		$("#timer-container").css("background-color", "#FFB03B");
		var id = setInterval(function() {
			sendAuth(getSkeleton());
		}, 30);

		countdown(5, function(){
			clearInterval(id);
			$("#timer-container").css("background-color", "#2C3E50");
			sendMessage("STOP_AUTH");
		});


	});
	}

	swal({
	  title: "Dance Auth!",
	  text: "Show us your moves...",
	  type: "info",
	  showCancelButton: false,
	  closeOnConfirm: true,
	  animation: "fade",
	  confirmButtonColor: "#FFB03B"
	}, function(confirm) {
		start_auth();
	});

	
});

