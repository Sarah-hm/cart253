/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
//sets canvas background
  createCanvas(500,500);
  background(255, 160, 43);

//Background mint quad outline
  stroke(121, 247, 211)
  fill(167,87,190);
  noFill();
  quad(60,50, 50,300, 150,380, 400,450);

//Three middle rectangles
  rectMode(CENTER);
  fill(167,87,210,125);
  rect(250,250,100,100);
  fill(167,87,220);
  rect(250,250,80,80);
  fill(167,87,240);
  rect(250,250,60,60);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
