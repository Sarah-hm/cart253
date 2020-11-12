/**************************************************
Activity6 (6?) - Sound

This will be a question (lvl) for my final project.
The question is: On a scale of 'I got this' to 'AAAAAH', how confident do you feel about the future?
The solution is: screaming over a certain threshold. There will be different thresholds of input
(with different strings appearing) to hint at users that this level works with the microphone.
**************************************************/
"use strict"

//set state
let state = `simulation` //can also be `level up`

//create array to display different strings according to rect height\
//the first is deliberately set to '[empty]' so nothing is showing if no sound is created
let stringArray = [` `, `I don't believe it`, `Let's not pretend, here.`, `Yeah, that's sounds about right`]
let currentLine = 0
let decimalIndex = 0

// the resizable rectangle
let rectangle;

//the microphone and its sound level input
let mic;
let micLevel;

// ======= setup =======
function setup() {
  createCanvas(600, 600)
  userStartAudio()
  textAlign(CENTER, CENTER)

  //start mic
  mic = new p5.AudioIn();
  mic.start();


  //set Rectangle class attributes
  let x = width;
  let y = 0

  rectangle = new Rectangle(x, y)
}

// ======== draw() =======
// Will check if simulation or level up state is true, react accordingly
function draw() {
  background(204, 231, 227)
  checkState();
}

function checkState() {
  if (state === `simulation`) {
    simulation();
  } else if (state === `level up`) {
    levelUp()
  }
}

// ===== Simulation =====
function simulation() {
  displayQuestion();
  checkRectHeight();
  rectangle.display();
  rectangle.resize();
  rectangle.displayString();
}

// If orange rect's corner is at top of canvas = level up. If not, keep going.
function checkRectHeight() {
  if (rectangle.uCornerY < 0) {
    state = `level up`
  } else {
    state = `simulation`
  }
}

//Display the #lvl and the riddle to find the solution to.
function displayQuestion() {
  push();
  textAlign(LEFT, CENTER);
  textSize(28);
  fill(255);
  text(`lvl #2`, width / 20, height / 20);
  text(`On a scale from 'I got this' to 'AAAAAAH',
how confident do you feel about the future?`, width / 20, height / 10 * 2)
  pop()
}

//Displays a text instead of what would otherwise be the next level
function levelUp() {
  push()
  textAlign(CENTER, CENTER)
  textSize(32)
  text(`You win!
This would be the next level of the game`, width / 2, height / 2)
  pop()
}