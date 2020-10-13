/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
"user strict";
let trashImg = undefined;
let userImg = undefined;

function preload() {
  trashImg = loadImage("assets/images/star.png");
  userImg = loadImage("assets/images/clown.png");
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  background(0);
}

function createTrash(x, y) {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
  };
  return trash;
}

// draw()
//
// Description of draw() goes here.
function draw() {}

function moveTrash() {
  // ==== to change direction or not to change direction=====
  let change = random();
  if (change < 0.1) {
    trash.vx = random(-trash.speed, trash.speed);
    trash.vy = random(-trash.speed, trash.speed);
  }
  // ==== set trash movement ====
  trash.x += trash.vx;
  trash.y += trash.vy;

  // === set limit inside canvas ===

  trash.x = constrain(trash.x, 0, width);
  trash.y = constrain(trash.y, 0, height);
}

function displayTrash(trash) {
  push();
}
