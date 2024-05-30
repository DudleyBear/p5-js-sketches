function setup() {
  createCanvas(800, 600); // initializing the starting canvas
}

function draw() {
}

function mousePressed() {
  for (let i = 1; i <= 5; i++) { //limits to 5 circles and because i is always increasing by one, the radius are concentric
    fill(random(255), random(255), random(255));  // Sets a random fill color for each circle
    ellipse(mouseX, mouseY, i * 20, i * 20);  // Draws concentric circles
  }
}
