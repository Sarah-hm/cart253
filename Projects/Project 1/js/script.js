/**************************************************
Project 1
Sarah Hontoy-Major
**************************************************/
let bg = {
  r: 0,
  g: 255,
  b: 0,
};
let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 4,
  image: undefined,
};

let rubbish1 = {
  x: 100,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
};
// ==== Download all images ====
function preload() {
  user.image = loadImage("assets/images/clown.png");
  rubbish1.image = loadImage("assets/images/star.png");
}
// ==== Set original background and universal aspects =====
function setup() {
  createCanvas(windowHeight, windowWidth);
  user.x = width / 2;
  user.y = height / 2;
  rectMode(CENTER);
  noStroke();
}

// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.b);

  // ==== Make user move =====
  if (keyIsDown(LEFT_ARROW)) {
    user.vx = -user.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    user.vx = user.speed;
  } else {
    user.vx = 0;
  }
  if (keyIsDown(UP_ARROW)) {
    user.vy = -user.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    user.vy = user.speed;
  } else {
    user.vy = 0;
  }
  user.x = user.x + user.vx;
  user.y = user.y + user.vy;

  // ==== Display user ====
  image(user.image, user.x, user.y, user.size, user.size);
  //Display rubbish 1 =====
  image(rubbish1.image, rubbish1.x, rubbish1.y, rubbish1.size, rubbish1.size);
}
