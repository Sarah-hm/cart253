/**************************************************
Project 1; let's save the planet, one rubbish at a time
Sarah Hontoy-Major
**************************************************/
"use strict";

let titleString = `The earth is in a full blown climate crisis.
Maybe you could help pick up a few flowing rubbish
before there is too much.

(click on any keyboard key to continue.
Play with arrow keys)`;
let winString = `The world is saved and we will never know pollution again`;
let gameOverString = `Greenhouse gas emission have increased too much.
Better find another planet soon`;

let trashImg;
let bgImg;
let titleImg;
let winImg;
let gameOverImg;

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
  speed: 5,
  image: undefined,
};

let trashPile = [];
let trashPileSize = 6;

function createTrash(x, y) {
  let trash = {
    x: x,
    y: y,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 10,
    angle: 0,
    picked: false,
  };
  return trash;
}

let state = `title`; // can be title, simulation, win, or gameOver

// ==== Download all images ====
function preload() {
  user.image = loadImage("assets/images/clown.png");
  // rubbish.image = loadImage("assets/images/star.png");
  trashImg = loadImage("assets/images/trash.png");
  bgImg = loadImage("assets/images/bg.png")
  titleImg = loadImage("assets/images/title.png")
  winImg = loadImage("assets/images/win.png")
  gameOverImg = loadImage("assets/images/gameOver.png")
}
// ==== Set original background and universal aspects =====
function setup() {
  // === basic set up of canvas ====
  createCanvas(1000, 1000);
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  // Create flowing rubbish, at random location
  for (let i = 0; i < trashPileSize; i++) {
    trashPile[i] = createTrash(random(0, width), random(0, height));
  }
}

// ===== set series of functions for every frame ======
function draw() {
  setBackground()

  checkState();
}

function setBackground() {
  push()
  imageMode(CORNER)
  image(bgImg, windowWidth, windowHeight)
  background(bgImg);
  pop()
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
  push()
  image(titleImg, windowWidth / 2, windowHeight / 2)
  pop()
}

function simulation() {
  push()
  addTrash();
  checkTrashNum();
  // ===== Trash pile movement and display =====
  for (let i = 0; i < trashPile.length; i++) {
    if (!trashPile[i].picked) {
      moveTrash(trashPile[i]);
      checkTrashPicked(trashPile[i]);
      displayTrash(trashPile[i]);
    }
  }
  // ===== user movement and display =====
  usermove();
  displayUser();
  pop()
}

function addTrash() {
  push()
  //  ==== add 1 trash every 3.3 seconds ====
  if (frameCount % 200 === 0) {
    let trash = createTrash(random(0, width), random(0, height))
    trashPile.push(trash);
    trashPileSize++
  }
  pop()
}

//  check number of trash on canvas, state = win if none, state = game over if 10 ===
function checkTrashNum() {
  push()
  if (trashPileSize === 0) {
    state = `win`;
  } else if (trashPileSize >= 10) {
    state = `gameOver`;
  }
  console.log(trashPileSize)
  pop()
}
// Chooses whether the provided trash changes direction and moves it
function moveTrash(trash) {
  push()
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.1) {
    trash.vx = random(-trash.speed, trash.speed);
    trash.vy = random(-trash.speed, trash.speed);
  }

  // Move the trash
  trash.x = trash.x + trash.vx;
  trash.y = trash.y + trash.vy;

  //rotate the trash
  rotate(trash.angle);
  trash.angle++

  // Constrain the trash to the canvas
  trash.x = constrain(trash.x, 0, width);
  trash.y = constrain(trash.y, 0, height);
  pop()
}

// ====== make user move ======
function usermove() {
  push()
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

  user.x = constrain(user.x, 80, width - 80);
  user.y = constrain(user.y, 80, height - 80)
  pop()
}

// Checks if the user overlaps the trash1 object and eats it if so
function checkTrashPicked(trash) {
  // We only want to check for an overlap if trash1 hasn't been picked yet
  if (!trash.picked) {
    let d = dist(user.x, user.y, trash.x, trash.y);
    if (d < user.size / 2 + trash.size / 2) {
      trash.picked = true;
      trashPileSize--
    }
  }
}
// ================ Final states : WIN or GAME OVER ==================
function win() {
  push();
  fill(255);
  text(winString, width / 2, height / 2);
  console.log(`win`)
  pop();
}

function gameOver() {
  push();
  fill(255);
  text(gameOverString, width / 2, height / 2);
  console.log(`gameOver`)
  pop();
}
// ==================== Display user and remaining trash =================
function displayUser() {
  push()
  image(user.image, user.x, user.y, user.size, user.size);
  pop()
}

function displayTrash(trash) {
  push();
  // Check if the trash is still available to be picked
  if (!trash.picked) {
    // Display the trash as its position and with its size

    image(trashImg, trash.x, trash.y, trash.size, trash.size);
    pop();
  }
}

// ===== Change from TITLE to SIMULATION by pressing any key =====
function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}