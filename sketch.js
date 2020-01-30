var r = 10;
var g = 250;
var b = 40;
function setup(){
createCanvas(1000, 1000);
}

function draw(){
r = map (mouseX, 0, 1200, 0, 125);
g = map (mouseX, 0, 1200, 50, 100);
b = map (mouseX, 0, 1200, 25, 50);
background(r,g,b);
ellipse(mouseX, 500, 50, 100);
drawSprites();
}
