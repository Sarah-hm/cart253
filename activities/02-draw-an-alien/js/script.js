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
  ;
    //body
    fill(159,199,185)
    ellipse(320,550, 200, 700);
    //head
    fill(172, 236, 213)
    ellipse(320,200,400,125)

  //Draw mouth
  strokeWeight(9)
  stroke(172, 236, 213)
  fill(255, 185, 179);
  ellipse(320,225, 50, 150)
    //hide 1/2 ellipse
    noStroke()
    fill(172, 236, 213);
    rectMode(CENTER);
    rect(320,185, 100, 80)

    //Draw nostrils
    noStroke()
    fill(133,166,154);
    ellipse(315,180,7,25);
    ellipse(325,180,7,25);


}

// draw()
//
// Description of draw() goes here.
function draw() {

}
