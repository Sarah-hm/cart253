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

let trash1;
let trash2;
let trash3;
let trash4;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0);
  trash1 = createTrash(random(0, width), random(0, height));
  trash2 = createTrash(random(0, width), random(0, height));
  trash3 = createTrash(random(0, width), random(0, height));
  trash4 = createTrash(random(0, width), random(0, height));
}

function createTrash(x, y) {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    picked: false,
  };
  return trash;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  moveTrash(trash);
  displayTrash(trash);
}

function moveTrash(trash) {
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
  image(trashImg, random(0, width), random(0, height), trash.size, trash.size);
}
