function setup() {
  createCanvas(800, 600);
  noLoop();
}

function mousePressed() {
  for (let i = 0; i < 10; i++) { // limits to 10 rectangles
    fill(random(255), random(255), random(255));  // Random color for each rectangle
    rect(mouseX + i * 20, mouseY, 20, 20);  // Draw rectangle directly using values
  }
}
