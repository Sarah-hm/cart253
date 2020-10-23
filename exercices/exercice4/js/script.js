"use strict";
// ===== Set variables for fish array ======
let school = [];
let schoolSize = 4;
let possibleSizes = [25, 50, 100, 150];

// === Set user variable ===

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


let state = 'title' //Can be Title, simulation, win, lose

// Set over all look of the simulation
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < schoolSize; i++) {
    school[i] = createFish(random(0, width), random(0, height));
  }
}

// ===== Set object for fish array =====
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
// ======= draw function ========
function draw() {
  background(0);
  checkWinOrLose();
  checkState();
}


// ======= Check if there is no fish left or if time is over ======
// PROBLEM !!!!! : The goal is to {state = lose} if frameCount >= 800 but only within the
// simulation state. Unfortunately I was only able to make it start from the very beginning
// of the simulation (when state = 'title'). How would I go around to make the frameCount
// (or any sort of timer really) start from the moment state = 'simulation' ?
function checkWinOrLose() {
  if (schoolSize === 0) {
    state = 'win'
  } else if (schoolSize >= 1 && frameCount >= 800) {
    state = 'lose'
  }
  console.log(school.length)
}
// ======= Check the state of the program; send to appropriate function ======
function checkState() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === "lose") {
    lose();
  }
}

function title() {
  push()
  textSize(30)
  fill(200, 100, 100)
  textAlign(CENTER, CENTER);
  text(
    `You might not be the biggest
  fish in the pond,but nothing
  is stopping you from eating
  all your competition

    Press on any key to begin.
    Navigate with your keyboard arrows
    And let see if you can eat that competition`,
    width / 2,
    height / 2
  );
  pop()
}

function simulation() {
  for (let i = 0; i < school.length; i++) {
    moveFish(school[i]);

    checkEatenFish(school[i])
    displayFish(school[i]);

  }
  moveUser();
  displayUser();
}

function win() {
  push()
  textSize(30)
  fill(200, 100, 100)
  textAlign(CENTER, CENTER);
  text(
    `You are a fierce competitor
    Too bad you can't enjoy the victory
    with anyone now...  `,
    width / 2,
    height / 2
  );
  pop()
}

function lose() {
  push()
  textSize(30)
  fill(200, 100, 100)
  textAlign(CENTER, CENTER);
  text(
    `So... I don't think
    the other fish have to
    fear for you. Keep trying,
    maybe. I wouldn't be too hopeful. `,
    width / 2,
    height / 2
  );
  pop()
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
      schoolSize--

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

// ===== Change from TITLE to SIMULATION by pressing any key =====
function keyPressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}