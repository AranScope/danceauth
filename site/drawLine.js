function drawLine(x, y, x1, y1) {
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.fillStyle = "#2C3E50";
		ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x1,y1);
ctx.stroke();
}
