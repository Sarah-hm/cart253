/**************************************************
A3 - drawing paintings

Sarah Hontoy-Major
**************************************************/

let bg = {
  r: 0,
  g: 0,
  b: 0,
};
let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthrate: 0.75,
  speed: 1,
  fill: 255,
  alpha: 200
}
let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.75,
  speed: 1,
  fill: 255,
  alpha: 200

}
// setup()
//
// Description of setup() goes here.
function setup() {

  //set canvas

  createCanvas(windowWidth, windowHeight);

  //set circles starting point
  noStroke()
  circle1.y = height / 2
  circle2.x = width;
  circle2.y = height / 2

}

// draw()
//
// Description of draw() goes here.
function draw() {
  //background
      background(bg.r, bg.g, bg.b)
      bg.r = map(circle1.size, 100, width, 0, 255);

  //left moving circle
    //set movement
      circle1.x += circle1.speed
      circle1.x = constrain(circle1.x, 0, width / 2, );
    //set size and growth
      circle1.size += circle1.growthrate
      circle1.size = constrain(circle1.size, 0, width)
    //set ellipse
      fill(circle1.fill, circle1.alpha);
      ellipse(circle1.x, circle1.y, circle1.size);

  //right moving circle
    //set movement
      circle2.x -= circle2.speed
      circle2.x = constrain(circle2.x, width / 2, width);
    //set size
      circle2.size = circle1.size * circle2.sizeRatio
    //set ellipse
      fill(circle2.fill, circle2.alpha);
      ellipse(circle2.x, circle2.y, circle2.size);


}
