/**************************************************
Sarah Hontoy-Major - Project 02 Proposal;

This is my prototype to "A millenial's survival guide", my final project.
This is my attempt to write the landing page of my game, the instruction page,
as well as the first level.
**************************************************/
"use strict";

let state = `titlePage`; //Can be titlePage, instructionPage, lvl1, fail, success

//Title page variables
let titlePage;
let titleImg;
let insNeutralImg;
let insHoverImg;
let magicWord = `any`
let currentInput = ``;
let correct = checkInput();

// Instruction page variables
let instructionPage;
let insPopUpImg;
let insBackButtonNeutralImg;
let insBackButtonHoverImg;

//Level 1 variables;
let lvl1;
let lvl1bgImg;
let house1NeutralImg;
let house1HoverImg;
let house2NeutralImg;
let house2HoverImg;
let house3NeutralImg;
let house3HoverImg;
let boxNeutralImg;
let boxHoverImg;


function preload() {
  //title Page images
  titleImg = loadImage("assets/images/Title.png");
  insNeutralImg = loadImage("assets/images/insNeutral.png");
  insHoverImg = loadImage("assets/images/insHover.png");

  //instruction Page images
  insPopUpImg = loadImage("assets/images/insPopUpImg.png")
  insBackButtonNeutralImg = loadImage("assets/images/insBackButtonNeutral.png");
  insBackButtonHoverImg = loadImage("assets/images/insBackButtonHover.png")

  //level 1 images
  lvl1bgImg = loadImage("assets/images/lvl1_bg.png");
  house1NeutralImg = loadImage("assets/images/house1Neutral.png")
  house1HoverImg = loadImage("assets/images/house1Hover.png")
  house2NeutralImg = loadImage("assets/images/house2Neutral.png")
  house2HoverImg = loadImage("assets/images/house2Hover.png")
  house3NeutralImg = loadImage("assets/images/house3Neutral.png")
  house3HoverImg = loadImage("assets/images/house3Hover.png")
  boxNeutralImg = loadImage("assets/images/boxNeutral.png");
  boxHoverImg = loadImage("assets/images/boxHover.png")

}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);

  imageMode(CENTER);
  rectMode(CENTER);

  //Set TitlePage class attributes
  let titleX = width / 2;
  let titleY = height / 5;

  let insX = width / 2;
  let insY = height / 2;

  let startX = width / 2;
  let startY = (height / 5) * 4;

  titlePage = new TitlePage({
    titleX,
    titleY,
    insX,
    insY,
    startX,
    startY,
  });

  //Set InstructionPage class attributes
  let insPopUpX = width / 2;
  let insPopUpY = height / 2;

  let insBackButtonX = width / 2;
  let insBackButtonY = height / 10 * 9;

  instructionPage = new InstructionPage({
    insPopUpX,
    insPopUpY,
    insBackButtonX,
    insBackButtonY,
  });

  //Set level 1 class attributes;
  let house1X = width / 4 * 3;
  let house1Y = height / 6 * 5;

  let house2X = width / 5;
  let house2Y = height / 16 * 7;

  let house3X = width / 7 * 6;
  let house3Y = height / 10 * 3;

  let boxX = width / 2;
  let boxY = height / 10 * 4.75;

  lvl1 = new Lvl1({
    house1X,
    house1Y,
    house2X,
    house2Y,
    house3X,
    house3Y,
    boxX,
    boxY
  })
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(230);
  checkState()
}

//Check which state we are in

function checkState() {
  if (state === `titlePage`) {
    titlePageState();
  } else if (state === `instructionPage`) {
    instructionPageState();
  } else if (state === `lvl1`) {
    lvl1State();
  } else if (state === `fail`) {
    fail();
  } else if (state === `success`) {
    success();
  }
}

// ================= Title Page ===================
// Display Title Page Class

function titlePageState() {
  checkInstructionOrStart()
  titlePage.displayTitle();
  titlePage.displayInstructions();
  titlePage.displayStartString();
}

// Check if Instructions button has been pressed or 'any' has been typed

function checkInstructionOrStart() {

  if (mouseIsPressed) {
    if (mouseX > titlePage.insX - titlePage.insWidth / 2 &&
      mouseX < titlePage.insX + titlePage.insWidth / 2 &&
      mouseY > titlePage.insY - titlePage.insHeight / 2 &&
      mouseY < titlePage.insY + titlePage.insHeight / 2) {
      state = `instructionPage`
    }
  } else if (checkInput()) {
    state = `lvl1`
  }
}

// functions to see if 'any' was typed, as seen in Pippin's example

function checkInput() {
  let lowerCaseInput = currentInput.toLowerCase();
  if (lowerCaseInput === magicWord) {
    return true;
  } else {
    return false;
  }
}

function keyTyped() {
  currentInput += key;
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    currentInput = ``;
  }
}

// ============ Instruction Page ============

// Display Instruction Page class , back button, (eventually more info button)
// (Thinking of putting the instruction page as a semi-opaque pop up over the title Page for cleaner look)

function instructionPageState() {
  checkBackButtonPressed();
  instructionPage.displayInstructionPopUp();
  instructionPage.displayBackButton();
}



// ===== function relating to the Instruction page =====

// If 'back' button on instruction page is pressed, go back to Title Page
function checkBackButtonPressed() {
  if (mouseIsPressed) {
    if (mouseX > instructionPage.insBackButtonX - instructionPage.insButtonsWidth / 2 &&
      mouseX < instructionPage.insBackButtonX + instructionPage.insButtonsWidth / 2 &&
      mouseY > instructionPage.insBackButtonY - instructionPage.insButtonsHeight / 2 &&
      mouseY < instructionPage.insBackButtonY + instructionPage.insButtonsHeight / 2) {
      state = `titlePage`
    }
  }
}

// ======================= LEVEL 1 ========================

//Display Level 1 class
function lvl1State() {
  checkLivingSpaceSelected();
  lvl1.setbackground();
  lvl1.setLivingSpaces();
  lvl1.setStrings();
}

function checkLivingSpaceSelected() {
  //This should probably be in an array for efficiency. Will be changed in the actual program.
  if (mouseIsPressed) {
    // function mouseClicked() {
    if (mouseX > lvl1.house1X - lvl1.house1Width / 2 &&
      mouseX < lvl1.house1X + lvl1.house1Width / 2 &&
      mouseY > lvl1.house1Y - lvl1.house1Height / 2 &&
      mouseY < lvl1.house1Y + lvl1.house1Height / 2) {
      state = `fail`
    } else if (mouseX > lvl1.house2X - lvl1.house2Width / 2 &&
      mouseX < lvl1.house2X + lvl1.house2Width / 2 &&
      mouseY > lvl1.house2Y - lvl1.house2Height / 2 &&
      mouseY < lvl1.house2Y + lvl1.house2Height / 2) {
      state = `fail`
    } else if (mouseX > lvl1.house3X - lvl1.house3Width / 2 &&
      mouseX < lvl1.house3X + lvl1.house3Width / 2 &&
      mouseY > lvl1.house3Y - lvl1.house3Height / 2 &&
      mouseY < lvl1.house3Y + lvl1.house3Height / 2) {
      state = `fail`
    } else if (mouseX > lvl1.boxX - lvl1.boxWidth / 2 &&
      mouseX < lvl1.boxX + lvl1.boxWidth / 2 &&
      mouseY > lvl1.boxY - lvl1.boxHeight / 2 &&
      mouseY < lvl1.boxY + lvl1.boxHeight / 2) {
      state = `success`
    }
  }
}

function fail() {
  push()
  background(255, 0, 0)
  textSize(25)
  fill(0)
  textAlign(CENTER, CENTER)
  text(`You really think you can afford that? riiiiiiight.
    (In the final game version, this will result in -1 life.
    The string will be presented as
    a 2-3 sec long pop up)`, width / 2, height / 2)
  pop()
}

function success() {
  push()
  background(0, 255, 0)
  textSize(25);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`That's more like it. At this rate,
  you MIGHT be able to afford a second one.
  (In the final game version, this will result
  in lvl up. The string will be presented
as a 2-3 sec pop up)`, width / 2, height / 2)
  pop()
}