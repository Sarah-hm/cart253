/**************************************************
Template p5 project
Sarah Hontoy-Major

Here lies my actity 07 - juggling jungle.
**************************************************/
"use strict"

let paddle;
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight)

  paddle = new Paddle(300, 20)
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  paddle.move();
  paddle.display();
}