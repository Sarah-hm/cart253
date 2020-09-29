/**************************************************
Exercice 2
Sarah Hontoy-Major

This is the exercice 02.

I have questions about the way my 'user' is behaving. My goal was to have something 'boomerang' around the cursor
instead of simply following it to add to the complexity of dodging covid19 (like in Pippin's acceleration video).
However, my 'user' is not behaving quite exactly like this.It will usually find its way to the top of the screen, and
keep going up until I lose it and it never comes back. What did I do to make that happen, and how can I solve it so it
behaves in the 'boomerang' way I anticipated.

Thank you!
**************************************************/
let starImage;
function preload() {
  starImage = loadImage("assets/images/star.png");
}

let bg = {
  r: 255,
  b: 230,
  g: 230,
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  acceleration: 0.1,
  maxSpeed: 4,
  fill: {
    r: 260,
    b: 140,
    g: 140,
  },
};

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 220,
    b: 255,
    g: 220,
  },
};

let star = {
  x: 0,
  y: 0,
  numCount: 5,
  size: 75,
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0, height);
  covid19.vx = covid19.speed;
  noStroke();
  noCursor();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(bg.r, bg.b, bg.g);

  //display static
  push();
  for (let i = 0; i < star.numCount; i++) {
    star.x = random(0, width);
    star.y = random(0, height);
    image(starImage, star.x, star.y, star.size, star.size);
  }
  pop();

  // set user movement
  //set  acceleration

  if (mouseX < user.x) {
    user.ax = -user.acceleration;
  } else {
    user.ax = user.acceleration;
  }

  if (mouseY < user.x) {
    user.ay = -user.acceleration;
  } else {
    user.ay = user.acceleration;
  }
  //set velocity
  user.vx += user.ax;
  user.vx = constrain(user.vx, -user.maxSpeed, user.maxSpeed);
  user.vy += user.ay;
  user.vy = constrain(user.vy, -user.maxSpeed, user.maxSpeed);

  user.x += user.vx;
  user.y += user.vy;

  //set user shape
  fill(user.fill.r, user.fill.b, user.fill.g);
  ellipse(user.x, user.y, user.size);

  //set covid movement
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  }

  //set covid shape
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  let d = int(dist(covid19.x, covid19.y, user.x, user.y));

  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }
}
