let bg = {
  r: 235,
  b: 250,
  g: 235,
};

let rectangle = {
  angle: 0,
  speed: 0.01,
  rectScale: 0,
};

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(bg.r, bg.b, bg.g);

  push();
  fill(255, 230, 230);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(rectangle.angle);
  scale(rectangle.rectScale);
  rect(0, 0, 100, 100);
  rectangle.angle += rectangle.speed;
  rectangle.rectScale += rectangle.speed;
  pop();
}
