/**************************************************
Project 1; let's save the planet, one rubbish at a time
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
  vx: 0,
  vy: 0,
  speed: 10,
  image: undefined,
};

let rubbish1 = {
  x: 100,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  image: undefined,
  state: `activated`, // can be activated or neutral
};

// ==== Download all images ====
function preload() {
  user.image = loadImage("assets/images/clown.png");
  rubbish1.image = loadImage("assets/images/star.png");
}
// ==== Set original background and universal aspects =====
function setup() {
  createCanvas(windowHeight, windowWidth);
  user.x = width / 2;
  user.y = height / 2;
  rectMode(CENTER);
  noStroke();
}

// ===== set series of functions described ======
function draw() {
  background(bg.r, bg.g, bg.b);
  usermove();
  rubbish1Move();
  // wait5Secs();
  displayUser();
  displayRubbish1();
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

function rubbish1Move() {
  rubbish1.vx = random(-rubbish1.speed, rubbish1.speed);
  rubbish1.vy = random(-rubbish1.speed, rubbish1.speed);

  rubbish1.x += rubbish1.vx;
  rubbish1.y += rubbish1.vy;
}

// function checkRubbishState() {
//   if (rubbish1.state === `activated`) {
//     displayRubbish1();
//   }
// }
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
function displayRubbish1() {
  //Display rubbish 1 =====
  image(rubbish1.image, rubbish1.x, rubbish1.y, rubbish1.size, rubbish1.size);
}
