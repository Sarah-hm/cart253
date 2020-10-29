/**************************************************
Template p5 project
Sarah Hontoy-Major

Here lies my exercice 5 - jungle SquareGarden.
**************************************************/
"use strict";

//Better to not put a high value on gravity so it doesn't accelerate TOOOO fast
let gravityForce = 0.0025;
let paddle;

// ===Balls array ===
let balls = [];
let numBalls = 3;

//===Squares array===
let squares = [];
let numSquares = 20;

let state = `simulation`; //can be simulation, win, lose

// ===== Setting up overall canvas and balls + squares array =====

function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300, 20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100);
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  for (let i = 0; i < numSquares; i++) {
    let x = random(0, width);
    let y = random(80, (height / 5) * 3);
    let square = new Square(x, y);
    squares.push(square);
  }
}

// ============ Draw function =============
function draw() {
  background(0);
  checkState();
}

function checkState() {
  if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }
}

function simulation() {
  background(0);

  checkWinOrLose();
  paddle.move();
  paddle.display();

  // ====== Display balls =======
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if ((ball.active = true)) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.wallBounce();
      ball.display();
    }
  }

  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    if (ball.check()) {
      balls.splice(i, 1);
    }
  }

  // ====== Display Squares only if they are not overlapping with an already existing square ======
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    //remove one from the array if square and ball collide
    for (let j = squares.length - 1; j >= 0; j--) {
      let square = squares[j];
      if (square.collide(ball)) {
        squares.splice(j, 1);
      }
    }
  }
  for (let i = 0; i < squares.length; i++) {
    let square = squares[i];
    square.display();
  }
}

function win() {
  push();
  background(0, 255, 0);
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text(
    `Wow! You won!
    Surprisingly.
    I think you cheated.
    I'm asking for instant replay.`,
    width / 2,
    height / 2
  );
  pop();
}

function lose() {
  push();
  background(255, 0, 0);
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);
  text(
    `Unsurprisingly,
    ya lost.
    Better luck next time!`,
    width / 2,
    height / 2
  );
  pop();
}

function checkWinOrLose() {
  if (squares.length === 0) {
    state = `win`;
    console.log("win");
  } else if (balls.length === 0) {
    state = `lose`;
  }
}