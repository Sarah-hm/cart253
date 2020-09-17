/**************************************************
variables-experiments
Sarah Hontoy-Major

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circle = {
  x: 0,
  y: 250,
  size: 250,
  speed: 2
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
  backgroundShade = backgroundShade + 1
  background(backgroundShade);
  circle.x += circle.speed
  ellipse(circle.x, circle.y, circle.size);


  console.log(
    `circle.x: ${circle.x}`,
    `circle.size: ${circle.size}`,
    `circle.speed:${circle.speed}`,
    `circle.y: ${circle.y}`)

}
