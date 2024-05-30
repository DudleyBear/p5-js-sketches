function setup() {
  createCanvas(800, 600);  // Initializes the begining canvas
}

function draw() {
}

function keyPressed() {
  fill('yellow');
  ellipse(width / 2, height / 2, 150, 100);  // Draws an ellipse at the center if any key is pressed
}
function keyReleased() {
  fill('yellow');
  ellipse(mouseX, mouseY, 50, 75);  // Draws an circle at the mouse position is the key is released
}

function doubleClicked() {
  clear();  // Clears the canvas is the user double clicks
}
