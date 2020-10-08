//set variables

let user = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

let cat = {
  x: 0,
  y: 0,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
};

//set background variable
let bg = {
  r: 230,
  g: 240,
  b: 255,
};

let state = `title`; // can be simulation, title, gotHim, escaped, almostEscaped
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //add functions for colours :)
  setupCircles();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.b);
  checkState();
}

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
    You should catch it before he goes too far`,
    width / 2,
    height / 2
  );
  pop();
}

function simulation() {
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function gotHim() {
  push();
  textSize(30);
  fill(255, 50, 50);
  textAlign(CENTER, CENTER);
  text(
    `You got him!
    Beware...
    Until next time!`,
    width / 2,
    height / 2
  );
  pop();
}

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

function setupCircles() {
  //set starting positions (separated)
  user.x = width / 3;
  user.y = height / 2;
  cat.x = (2 * width) / 3;
  cat.y = height / 2;
  //set starting random velocity
  user.vx = random(-user.speed, user.speed);
  user.vy = random(-user.speed, user.speed);
  cat.vx = random(-cat.speed, cat.speed);
  cat.vy = random(-cat.speed, cat.speed);
}

function move() {
  //set movement
  user.x += user.vx;
  user.y += user.vy;

  cat.x += cat.vx;
  cat.y += cat.vy;
}

function checkOffScreen() {
  //are they going off canvas;
  if (isOffScreen(user) || isOffScreen(cat)) {
    state = `espaced`;
  }
}

function isOffScreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y >> height) {
    return true;
  } else {
    return false;
  }
}

function checkOverlap() {
  //check if circles are touche
  let d = dist(user.x, user.y, cat.x, cat.y);
  if (d < user.size / 2 + cat.size / 2) {
    state = `gotHim`;
  }
}

function display() {
  //display circles
  ellipse(user.x, user.y, user.size);
  ellipse(cat.x, cat.y, cat.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
