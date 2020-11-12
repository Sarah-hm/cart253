/**************************************************
Activity-09 : sound
Sarah Hontoy-Major

He is the activity on sound and physic. woaw.
**************************************************/
"use strict"

// the balls
let balls = [];

//F-minor
let notes = [`F3`, `G3`, `Ab4`, `Bb4`, `C4`, `Db4`, `Eb4`, `F4`];


// setup()
//Creates canvas
function setup() {
  createCanvas(600, 600);
  userStartAudio();

}

// draw()

function draw() {
  background(0);

  //You can use the same 'let ball' and put something inside of it in
  //a new function later one because, by using 'let' in front of it,
  //you let the program know this variable will only exist within those { }
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed() {
  createBall(mouseX, mouseY)
}

function createBall(x, y) {
  let note = random(notes);
  let ball = new Ball(x, y, note);
  balls.push(ball)
}