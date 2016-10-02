function drawCircle(x, y) {
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.arc(x,y,7,0,2*Math.PI);//center x, center y, size,  start angle, end angle
		ctx.fill();
}

function clearCanvas() {
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,800,600);
}