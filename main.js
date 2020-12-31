canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth= 3;
ctx.rect(110, 100, 600, 400);
ctx.stroke()

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth=7;
ctx.arc(250, 250, 60, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth=7;
ctx.arc(400, 250, 60, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth=7;
ctx.arc(550, 250, 60, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth=7;
ctx.arc(330, 320, 60, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth=7;
ctx.arc(476, 320, 60, 0, 2*Math.PI);
ctx.stroke();