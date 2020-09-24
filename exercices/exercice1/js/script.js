/**************************************************
Exercice 1
Sarah Hontoy-Major

Here is the Exercice 1 I started so freaking late so my bad if it's the bare minimum. I love myself sometimes. Not this time
**************************************************/
let bg = {
  r: 100,
  g: 100,
  b: 100,
};

//Setting 3x circle objects (1x red, 1xblue, 1xgreen)
let circleR = {
  x: 200,
  y: 250,
  size: 300,
  speed: 1,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};
let circleG = {
  x: 500,
  y: 250,
  size: 75,
  speed: -1,
  fill: {
    r: 0,
    g: 255,
    b: 0,
  },
};
let circleB = {
  x: 250,
  y: 500,
  size: 75,
  speed: 1,
  fill: {
    r: 0,
    g: 0,
    b: 255,
  },
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  //set circles starting point
  circleR.y = height / 5;
  circleG.x = width / 1.2;
  circleB.x = width / 2;
  circleB.y = height / 1.08;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.g, bg.g);
  noStroke();

  //red circle
  //set movement
  circleR.x += circleR.speed;
  circleR.y += circleR.speed;
  // Set shape
  fill(circleR.fill.r, circleR.fill.g, circleR.fill.b);
  ellipse(circleR.x, circleR.y, circleR.size);

  //green circle
  //set movement
  circleG.x += circleG.speed;
  circleG.y -= circleG.speed;
  //Set shape
  fill(circleG.fill.r, circleG.fill.g, circleG.fill.b);
  ellipse(circleG.x, circleG.y, circleG.size);

  //blue circle
  circleB.x += circleB.speed;
  circleB.y -= circleB.speed;
  //Set shape
  fill(circleB.fill.r, circleB.fill.g, circleB.fill.b);
  ellipse(circleB.x, circleB.y, circleB.size);
}
