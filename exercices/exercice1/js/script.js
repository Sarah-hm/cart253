/**************************************************
Exercice 1
Sarah Hontoy-Major

Here is the Exercice 1 I started so freaking late oops.
**************************************************/
//Created variables for background
let bg = {
  r: 100,
  g: 100,
  b: 100,
};

//Created variables for circles
let circleR = {
  x: 200,
  y: 250,
  size: 300,
  GrowthRate: 1,
  speed: 1,
  fill: {
    r: 246,
    g: 165,
    b: 124,
  },
};
let circleG = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.5,
  speed: -1,
  fill: {
    r: 26,
    g: 161,
    b: 140,
  },
};
let circleB = {
  x: 250,
  y: 500,
  size: 75,
  sizeRatio: 0.25,
  speed: 1,
  fill: {
    r: 60,
    g: 177,
    b: 171,
  },
};

// setup()
//
// Setting up Window canvas and shapes' starting points
function setup() {
  //set canvas
  createCanvas(windowWidth, windowHeight);

  //set circles starting point
  circleR.y = height / 5;
  circleG.x = width / 1.2;
  circleB.x = width / 2;
  circleB.y = height / 1.08;
}

// draw()
//
// Background's color changes based on mouse position;
// 3 circles converge to corner of the window while getting bigger;

function draw() {
  //Set changing color background based on mouse movement
  bg.r = map(mouseX, 0, width, 0, 255);
  background(bg.r, bg.g, bg.g);
  noStroke();

  //Set red-ish circle
  //set movement
  circleR.x += circleR.speed;
  circleR.y += circleR.speed;
  // constrain to window
  circleR.x = constrain(
    circleR.x,
    0 + circleR.size / 2,
    width - circleR.size / 2
  );
  circleR.y = constrain(
    circleR.x,
    0 + circleR.size / 2,
    width - circleR.size / 2
  );
  //set Growth
  circleR.size += circleR.GrowthRate;
  circleR.size = constrain(circleR.size, 0, width);
  // Set shape
  fill(circleR.fill.r, circleR.fill.g, circleR.fill.b);
  ellipse(circleR.x, circleR.y, circleR.size);

  //Set green-ish circle
  //set movement
  circleG.x += circleG.speed;
  circleG.y -= circleG.speed;
  //constrain to window
  circleG.x = constrain(
    circleG.x,
    0 + circleG.size / 2,
    width - circleG.size / 2
  );
  circleG.y = constrain(
    circleG.x,
    0 + circleG.size / 2,
    width - circleG.size / 2
  );
  //set growth
  circleG.size = circleR.size * circleG.sizeRatio;
  //Set shape
  fill(circleG.fill.r, circleG.fill.g, circleG.fill.b);
  ellipse(circleG.x, circleG.y, circleG.size);

  //Set blue-ish circle
  //set movement
  circleB.x += circleB.speed;
  circleB.y += circleB.speed;
  //constrain to window
  circleB.x = constrain(
    circleB.x,
    0 + circleB.size / 2,
    width - circleB.size / 2
  );
  circleB.y = constrain(
    circleB.x,
    0 + circleB.size / 2,
    width - circleB.size / 2
  );
  //set Growth
  //set growth
  circleB.size = circleR.size * circleB.sizeRatio;
  //Set shape
  fill(circleB.fill.r, circleB.fill.g, circleB.fill.b);
  ellipse(circleB.x, circleB.y, circleB.size);
}
