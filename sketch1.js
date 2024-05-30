function setup() {
  createCanvas(400, 400); //creates the inital board in a white colour
  background(255);
}

function draw() {
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) { //if left arrow pressed the circle will be craeted in blue
    fill('blue');
    ellipse(100, 100, 50);
    
  } else if (keyCode === RIGHT_ARROW) { // if right pressed, a different circle is in green
    fill('green');
    ellipse(200, 200, 50);
    
  } else if (keyCode === ' ') { // Spacebar key code
    let mouseX = winMouseX;
    let mouseY = winMouseY;
    fill('black');
    ellipse(mouseX, mouseY, 75); // draws a circle at the mouse coordinates in black with a diameter of 75
  }
}
