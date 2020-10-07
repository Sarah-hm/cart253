// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  parallels(100, 100, 45, 1, 100, 1);
  parallels(45, 40, 15, 2, 20, 6);
  parallels(433, 217, 2, 7, 3, 20);
  parallels(2, 456, 33, 1, 300, 30);
}

function parallels(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
  for (let i = 0; i < numLines; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x, y, lineWidth, lineHeight);
    x += lineSpacing;
  }
}
