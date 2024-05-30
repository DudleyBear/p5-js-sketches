function setup() {
  createCanvas(800, 600);  // Initializes the starting canvas
}

function draw() {
}

function mousePressed() {
  stroke('red');  // Color for the line from top-left to bottom-right
  line(0, 0, width, height);
}

function mouseReleased() {
  stroke('blue');  // Color for the line from top-right to bottom-left
  line(width, 0, 0, height);
}
