//set variables

let user = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
};

let cat = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 30,
};

//set background variable
let bg = {
  r: 230,
  g: 240,
  b: 255,
};

// =======Set canvas, original state and position ========
let state = `title`; // can be simulation, title, gotHim, escaped, almostEscaped
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  setupObjects();
}

// ======= set background, check state; reacts accordingly  ======
function draw() {
  background(bg.r, bg.g, bg.b);
  checkState();
}

//  !!! functions definitions !!!
function setupObjects() {
  //set origin point of user and cat
  user.x = width / 3;
  user.y = height / 2;
  cat.x = (2 * width) / 3;
  cat.y = height / 2;
}

//  ----- function to check which state and react -----
function checkState() {
  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `gotHim`) {
    gotHim();
  } else if (state === `almostEscaped`) {
    almostEscaped();
  } else if (state === `escaped`) {
    escaped();
  }
}

function title() {
  push();
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(
    `oh no!
    The cat went outside!
    You should catch him before he goes too far`,
    width / 2,
    height / 2
  );
  pop();
}

// ===== create state for when the simulation is running

function simulation() {
  userMove();
  catMove();
  checkOffScreen();
  checkOverlap();
  checkPosition();
  display();
}

// ===== set user movement based on arrow input ======
function userMove() {
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

//===== set cat movement ======
function catMove() {
  //set speed
  cat.vx = random(-cat.speed, cat.speed);
  cat.vy = random(-cat.speed, cat.speed);
  //set movement
  cat.x += cat.vx;
  cat.y += cat.vy;
}

//  -----function to check if cat is off the canvas : state is 'escaped' if yes  -----
function checkOffScreen() {
  //is cat going off canvas;
  if (cat.x < 0 || cat.x > width || cat.y < 0 || cat.y > height)
    state = `escaped`;
}

// -----
function checkOverlap() {
  let d = dist(user.x, user.y, cat.x, cat.y);
  let result = d < user.size / 2 + cat.size / 2;
  return result;
}

function checkPosition() {
  if (
    (checkOverlap(true) && cat.x < 100) ||
    (checkOverlap(true) && cat.x > width - 100) ||
    (checkOverlap(true) && cat.y < 100) ||
    (checkOverlap(true) && cat.y > height - 100)
  ) {
    state = `almostEscaped`;
  } else if (checkOverlap(true)) {
    state = `gotHim`;
  } else {
    state = `simulation`;
  }
}

// ===== state for when the cat escaped :( cue sad moment
function escaped() {
  push();
  textSize(30);
  fill(50, 50, 255);
  textAlign(CENTER, CENTER);
  text(
    `He escaped.
    Let's hope he comes back soon `,
    width / 2,
    height / 2
  );
  pop();
}
// ====== state for when they overlap but near the edge of the canvas
function almostEscaped() {
  push();
  textSize(30);
  fill(50, 50, 255);
  textAlign(CENTER, CENTER);
  text(
    `Ouf! Close one!
    But you got him!
    Until next time... `,
    width / 2,
    height / 2
  );
  pop();
}
//====== create state for when they overlap in the middle =====
function gotHim() {
  push();
  textSize(30);
  fill(255, 50, 50);
  textAlign(CENTER, CENTER);
  text(
    `You got him!
    Until next time...`,
    width / 2,
    height / 2
  );
  pop();
}

function display() {
  //display circles
  ellipse(user.x, user.y, user.size);
  ellipse(cat.x, cat.y, cat.size);
}
//
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
