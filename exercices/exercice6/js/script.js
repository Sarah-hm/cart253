/**************************************************
Activity6 (6?) - Sound

This will be a question (lvl) for my final project.
The question is: On a scale of 'I got this' to 'AAAAAH', how confident do you feel about the future?
The solution is: screaming over a certain threshold. There will be different thresholds of input
(with different strings appearing) to hint at users that this level works with the microphone.
**************************************************/
"use strict"
// setup()

//create array to display different text according to rect height\
let threshold = [`I don't believe it`, `I think you're more scared than that`, `Let's not pretend, here.`, `Yeah, that's sounds about right`]
let currentLine = 0

// Set variables
let rectangle;

function setup() {
  createCanvas(600, 600)
  textAlign(CENTER, CENTER)

  //set Rectangle class attributes

  let x = width;
  let y = 50;

  rectangle = new Rectangle(x, y)
}

// draw()

function draw() {
  background(204, 231, 227)

  rectangle.display();
  rectangle.resize();


  let string = threshold[currentLine]
  text(string, width / 2, height / 2)
}