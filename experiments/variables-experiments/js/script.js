/**************************************************
experiment - variables
Sarah Hontoy-Major

These are experiments to learn how to work with variables. yay!
**************************************************/
//Set variables

let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 1,
  fill: 255
}
// setup()
//
// Set canvas
function setup() {
  createCanvas(500, 500);
}
// draw()
//
// Draw a moving circle
function draw() {
  //Set background color
  background(backgroundShade);

  //Set movement
  circle.x += circle.speed;
  circle.x = constrain(circle.x, 0, width);

  //Set color
  circle.fill = map(circle.x, 0, width, 0, 255);
  fill(circle.fill);

  //set ellipse
  ellipse(circle.x, circle.y, circle.size);

}
