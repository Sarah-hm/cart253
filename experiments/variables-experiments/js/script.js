/**************************************************
variables-experiments
Sarah Hontoy-Major

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize=25;
let circleSpeed=2;
let circleAcceleration=0.25;
let circleOffset=300
letcircleOffsetVariation=-100

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  // backgroundShade = backgroundShade + 1
  background(backgroundShade);
  circleX += circleSpeed
  circleSpeed += circleAcceleration
  ellipse (circleX,circleY,circleSize+300)
  ellipse (circleX,circleY,circleSize+200)
  ellipse (circleX,circleY,circleSize+100)
  ellipse (circleX,circleY,circleSize);

}
