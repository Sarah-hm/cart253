/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {

  //Set up background
  createCanvas(640,480);
  background(255, 213, 184);

  //Draw eyes
  noStroke();
  fill(172, 236, 213);
  ellipse(200,150,50,100);
  ellipse(435,150,50,100);
    //white portions
    fill(254, 251, 234);
    ellipse(200,150,30,80);
    ellipse(435,150,30,80)
    //pupils
    fill(66, 71, 71);
    ellipse(200,150,15,35);
    ellipse(435,150,15,35)
    //reflection
    fill(255,255,255);
    ellipse(197,143,4,10)
    ellipse(432,143,4,10);

  //Draw body and head
  noStroke();
  fill(172, 236, 213);
  ellipse(320,550, 200, 700);
  ellipse(320,200,400,125);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
