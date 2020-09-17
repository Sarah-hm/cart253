/**************************************************
variables-experiments
Sarah Hontoy-Major

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circle = {
  x: 250,
  y: 250,
  size: 100,
  speed: 1
}
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(backgroundShade);
  circle.speed=random(-5,5)
  circle.y=random (225,255)
  circle.x += circle.speed
  ellipse(circle.x, circle.y, circle.size);


}
