/**************************************************
Template p5 project
Sarah Hontoy-Major

Here lies my exercice 5 - jungle SquareGarden.
**************************************************/
"use strict"

//Better to not put a high value on gravity so it doesn't accelerate TOOOO fast
let gravityForce = 0.0025
let paddle;

// ===Balls array ===
let balls = [];
let numBalls = 3;

//===Squares array===
let squares = [];
let numSquares = 20;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight)

  paddle = new Paddle(300, 20)

  for (let i = 0; i < numBalls; i++) {
    let x = random(0, width);
    let y = random(-400, -100)
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  for (let i = 0; i < numSquares; i++) {
    let x = random(0, width);
    let y = random(80, height / 5 * 3)
    let square = new Square(x, y);
    squares.push(square)
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i]
    if (ball.active = true) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
    }
  }

  for (let i = 0; i < squares.length; i++) {
    let existing = squares[i];
    let d = dist(square.x, square.y, existing.x, existing.y)
    if (d < square.width / 2 + existing.width / 2 || d < square.height / 2 + existing.height / 2) {
      break;
    } else {
      existing.display()
    }
  }

  // for (let i = 0; i < squares.length; i++) {
  //   let square = squares[i];
  //   if (square.active = true) {
  //     square.display()
  //   }
  // }
}