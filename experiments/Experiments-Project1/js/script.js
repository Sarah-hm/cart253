/**************************************************
Project 1; let's save the planet, one rubbish at a time
Sarah Hontoy-Major
**************************************************/
"use strict";

let trashImg;
let markerFont;

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

let trashPile = [];
let trashPileSize = 8;

function createTrash(x, y) {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
  };
  return trash;
}

let titleString = `The earth is in a full blown climate crisis.
Maybe you could help pick up a few flowing rubbish
before there is too much.

(click on any keyboard key to continue.
Play with arrow keys)`;
let winString = `The world is saved and we will never know pollution again`;
let gameOverString = `Greenhouse gas emission have increased too much.
Better find another planet soon`;

let state = `title`; // can be title, simulation, win, or gameOver

// ==== Download all images ====
function preload() {
  user.image = loadImage("assets/images/clown.png");
  // rubbish.image = loadImage("assets/images/star.png");
  trashImg = loadImage("assets/images/star.png");
  markerFont = loadFont("assets/font/PermanentMarker-Regular.ttf");
}
// ==== Set original background and universal aspects =====
function setup() {
  // === basic set up of canvas ====
  createCanvas(1000, 1000);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  // === set typography ===
  textAlign(CENTER);
  textSize(32);
  textFont(`markerFont`);

  // Create flowing rubbish, at random location
  for (let i = 0; i < trashPileSize; i++) {
    trashPile[i] = createTrash(random(0, width), random(0, height));
  }
}

// ===== set series of functions for every frame ======
function draw() {
  background(bg.r, bg.g, bg.b);
  checkTrashNum();
  checkState();
}

function trashStartingPoint(trash) {
  trash.x = random(0, width);
  trash.y = random(0, height);
}
// === check number of trash on canvas, state = win if none, state = game over is 10 ===
function checkTrashNum() {
  if (trashPileSize === 0) {
    state === `win`;
  } else if (trashPileSize >= 10) {
    state === `GameOver`;
  }
}

function checkState() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === "gameOver") {
    gameOver();
  }
}

function title() {
  fill(255);
  text(titleString, width / 2, height / 2);
}

function simulation() {
  addTrash();
  // ===== Trash pile movement and display =====
  for (let i = 0; i < trashPileSize; i++) {
    moveTrash(trashPile[i]);
    checkTrash(trashPile[i]);
    displayTrash(trashPile[i]);
  }

  // wait5Secs();
  // ===== user movement and display =====
  usermove();
  displayUser();
}

function win() {
  fill(255);
  text(titleString, width / 2, height / 2);
}

function gameOver() {
  fill(255);
  text(titleString, width / 2, height / 2);

}

function addTrash() {

  if (frameCount % 300 === 0) {
    let trash = createTrash(random(0, width), random(0, height))
    trashPile.push(trash)
  }
}
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

// ====== make user move ======
function usermove() {
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
}

// Checks if the user overlaps the trash1 object and eats it if so
function checkTrash(trash) {
  // We only want to check for an overlap if trash1 hasn't been picked yet
  if (!trash.picked) {
    let d = dist(user.x, user.y, trash.x, trash.y);
    if (d < user.size / 2 + trash.size / 2) {
      trash.picked = true;
    }
  }
}

// function wait5Secs() {
//   //code taken from : https://editor.p5js.org/denaplesk2/sketches/S1OAhXA-M
//   if (frameCount % 300 === 0 && ) {
//     checkRubbishState();
//   }
// }

// ==================== All Display functions =================
function displayUser() {
  image(user.image, user.x, user.y, user.size, user.size);
}

function displayTrash(trash) {
  // Check if the trash is still available to be picked
  if (!trash.picked) {
    // Display the trash as its position and with its size
    push();
    image(trashImg, trash.x, trash.y, trash.size, trash.size);
    pop();
  }
}

function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}