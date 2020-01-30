var r = 10;
var g = 250;
var b = 40;

map (r, mouseX, 0, 1200, 0, 255);
map (g, mouseX, 0, 1200, 50, 100);
map (b, mouseX, 0, 1200, 25, 50);
ellipse(mouseX, 50, 50, 100);