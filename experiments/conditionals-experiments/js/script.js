let bg = {
  r: 230,
  g: 255,
  b: 255,
};

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.1,
  maxSpeed: 4,
  fill: {
    r: 255,
    g: 230,
    b: 230,
  },
};

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(bg.r, bg.g, bg.b);

  if (mouseX < circle.x) {
    circle.ax = -circle.acceleration;
  } else {
    circle.ax = circle.acceleration;
  }

  if (mouseY < circle.y) {
    circle.ay = -circle.acceleration;
  } else {
    circle.ay = circle.acceleration;
  }

  circle.vx += circle.ax;
  circle.vx = constrain(circle.vx, -circle.maxSpeed, circle.maxSpeed);
  circle.vy += circle.ay;
  circle.vy = constrain(circle.vy, -circle.maxSpeed, circle.maxSpeed);

  circle.x += circle.vx;
  circle.y += circle.vy;

  fill(circle.fill.r, circle.fill.g, circle.fill.b);
  ellipse(circle.x, circle.y, circle.size);
}
