/**************************************************
This is the activity to understand better conditionals and movement
Sarah Hontoy-Major
**************************************************/
let bg = {
  r: 255,
  b: 230,
  g: 230,
};

let user = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 260,
    b: 140,
    g: 140,
  },
};

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 220,
    b: 255,
    g: 220,
  },
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0, height);
  covid19.vx = covid19.speed;
  noStroke();
  noCursor();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.b, bg.g);

  //display static
  push();
  for (let i = 0; i < 1000; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(0);
    point(x, y);
  }
  pop();

  // user movement
  user.x = mouseX;
  user.y = mouseY;

  //user ellipse
  fill(user.fill.r, user.fill.b, user.fill.g);
  ellipse(user.x, user.y, user.size);

  //covid movement
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  }

  //covid ellipse
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  let d = int(dist(covid19.x, covid19.y, user.x, user.y));

  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }
}
