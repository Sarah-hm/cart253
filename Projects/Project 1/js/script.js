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
  // vx: 0,
  // vy: 0,
  // speed: 4,
  image: undefined,
};

// ==== Download all images ====
function preload() {
  user.image = loadImage("assets/images/clown.png");
}
// ==== Set original background and universal aspects =====
function setup() {
  createCanvas(windowHeight, windowWidth);
  background(bg.r, bg.g, bg.b);
  rectMode(CENTER);
  noStroke();
}

// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.b);

  image(user.image, user.x, user.y, user.size, user.size);
}
