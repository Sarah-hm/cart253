"use strict";
let trashImg = undefined;
function preload() {
  trashImg = loadImage("assets/images/star.png");
}

let trashPile = [];
let trashPileSize = 8;

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);

  // Create four trash, positioned randomly
  for (let i = 0; i < trashPileSize; i++) {
    trashPile[i] = createTrash(random(0, width), random(0, height));
  }
}

// createTrash(x,y)
// Creates a new JavaScript Object describing a trash and returns it
function createTrash(x, y) {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
  };
  return trash;
}

// draw()
// Moves and displays our trash
function draw() {
  background(0);

  for (let i = 0; i < trashPileSize; i++) {
    moveTrash(trashPile[i]);
    displayTrash(trashPile[i]);
  }
}
// moveTrash(trash)
// Chooses whether the provided trash changes direction and moves it
function moveTrash(trash) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    trash.vx = random(-trash.speed, trash.speed);
    trash.vy = random(-trash.speed, trash.speed);
  }

  // Move the trash
  trash.x = trash.x + trash.vx;
  trash.y = trash.y + trash.vy;

  // Constrain the trash to the canvas
  trash.x = constrain(trash.x, 0, width);
  trash.y = constrain(trash.y, 0, height);
}

// displayTrash(trash)
// Displays the provided trash on the canvas
function displayTrash(trash) {
  push();
  fill(200, 100, 100);
  noStroke();
  image(trashImg, trash.x, trash.y, trash.size, trash.size);
  pop();
}
