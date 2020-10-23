"use strict";

let school = [];
let schoolSize = 4;
let possibleSizes = [25, 50, 100, 150];

let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
  fill: {
    r: 255,
    b: 240,
    g: 235
  }
};


let state = 'Title' //Can be Title, simulation, win, lose

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    eaten: false,
  };
  fish.size = random(possibleSizes)
  return fish;
}

function draw() {
  background(0);

  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);

    checkEatenFish(school[i])
    displayFish(school[i]);

  }
  moveUser();
  displayUser();
}

// ========== Move fish in a random, yet smoother way ======
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // == move the fish ==
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// ========== move User based on keyboard arrows =======

function moveUser() {
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

  user.x = constrain(user.x, 0, width);
  user.y = constrain(user.y, 0, height)
  pop()
}

// ======= Check if you are overlapping (have eaten) a red fish =======

function checkEatenFish(fish) {
  if (!fish.eaten) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if (d < user.size / 2 + fish.size / 2) {
      fish.eaten = true

    }
  }
}

// ====== Display remaining fish, those that have not been eaten by yours truly =======
function displayFish(fish) {
  push()
  if (!fish.eaten) {
    fill(200, 100, 100);
    ellipse(fish.x, fish.y, fish.size);
  }
  pop()
}

// ====== Always display user, because you are invicible and will live forever ======

function displayUser() {
  push()
  fill(user.fill.r, user.fill.b, user.fill.g)
  ellipse(user.x, user.y, user.size, user.size);
  pop()
}