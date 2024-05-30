function setup() {
  createCanvas(800, 600);  // Initializes the starting canvas
}

function draw() {
}

function keyPressed() {
  if (keyCode === 'a') {  // the A keycode
    fill('purple');
    triangle(100, 100, 150, 50, 200, 100); // creates a purple triangle if A is clicked
  } else if (keyCode === 'b') {  // the B keycode
    fill('orange');
    triangle(250, 250, 300, 200, 350, 250); // creates a orange triangle if B is clicked
  }
}
function mousePressed() {
  let h = 50 * sqrt(3);
  fill('white');
  triangle(mouseX, mouseY - h / 2, mouseX - 50, mouseY + h / 2, mouseX + 50, mouseY + h / 2); //creates a equilateral triangle with side lengths of 100 if the mouse is pressed
}

