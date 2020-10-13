/**************************************************
Project 1; let's save the planet, one rubbish at a time
Sarah Hontoy-Major
**************************************************/
"use strict";
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

let rubbishPile = [];

let rubbish = {
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
  rubbish.image = loadImage("assets/images/star.png");
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
  rubbishMove();
  // checkrubbishOverlap();
  // wait5Secs();
  displayUser();
  displayrubbish();
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

function rubbishMove() {
  let change = random();
  if (change < 0.1) {
    rubbish.vx = random(-rubbish.speed, rubbish.speed);
    rubbish.vy = random(-rubbish.speed, rubbish.speed);
  }

  rubbish.x += rubbish.vx;
  rubbish.y += rubbish.vy;

  rubbish.x = constrain(rubbish.x, 0, width);
  rubbish.y = constrain(rubbish.y, 0, height);
}
// function checkrubbishOverlap() {
//   let d = dist(user.x, user.y, rubbish.x, rubbish.y);
//   if (d < user.size / 2 + rubbish.size / 2) {
//     rubbish.state = `neutral`;
//   }
// }
// function checkRubbishState() {
//   if (rubbish.state === `activated`) {
//     displayrubbish();
//   } else if (rubbish.state === `neutral`) {
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
function displayrubbish() {
  //Display rubbish 1 =====
  image(rubbish.image, rubbish.x, rubbish.y, rubbish.size, rubbish.size);
}
