/**************************************************
Sarah Hontoy-Major - Project 02 Proposal;

This is my prototype to "A millenial's survival guide", my final project.

level 1 : buying a house;
level 2 : christmas deco (snowflake);
level 3:

**************************************************/
"use strict";

let state = `lvl2`; //Can be titlePage, instructionPage, lvl1, fail, lvl1Success

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

//level 2 variables
let lvl2;
let candycaneNeutralImg;
let candycaneHoverImg;
let snowflakeNeutralImg;
let snowflakeHoverImg;
let snowglobeNeutralImg;
let snowglobeHoverImg;
let xmasBallNeutralImg;
let xmasBallHoverImg;


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

  //level 2 images
  candycaneNeutralImg = loadImage("assets/images/candycaneNeutral.png");
  candycaneHoverImg = loadImage("assets/images/candycaneHover.png");
  snowflakeNeutralImg = loadImage("assets/images/snowflakeNeutral.png");
  snowflakeHoverImg = loadImage("assets/images/snowflakeHover.png");
  snowglobeNeutralImg = loadImage("assets/images/snowglobeNeutral.png");
  snowglobeHoverImg = loadImage("assets/images/snowglobeHover.png");
  xmasBallNeutralImg = loadImage("assets/images/xmasBallNeutral.png");
  xmasBallHoverImg = loadImage("assets/images/xmasBallHover.png");
}

//Setting up canvas, universal modes, and Title page, Instruction Page and lvl 1 page classes
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

  //Set level 2 class attributes;
  let candycaneX = width / 4
  let candycaneY = height / 5 * 2;

  let snowflakeX = width / 4 * 3;
  let snowflakeY = height / 5 * 2;

  let snowglobeX = width / 4;
  let snowglobeY = height / 5 * 4;

  let xmasBallX = width / 4 * 3;
  let xmasBallY = height / 5 * 4;

  lvl2 = new Lvl2({
    candycaneX,
    candycaneY,
    snowflakeX,
    snowflakeY,
    snowglobeX,
    snowglobeY,
    xmasBallX,
    xmasBallY
  })

}

//Will check state every fram and react accordingly
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
  } else if (state === `lvl1Success`) {
    lvl1Success();
  } else if (state === `lvl2`) {
    lvl2State();
  } else if (state === `lvl2Success`) {
    lvl2Success();
  } else if (state === `lvl3`) {
    lvl3State();
  } else if (state === `lvl3Success`) {
    lvl3Success();
  } else if (state === `fail`) {
    fail();
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
  // How would I go about putting this in an array?
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
      state = `lvl1Success`
    }
  }
}

function lvl1Success() {
  push()
  imageMode(CORNER);
  image(lvl1.backgroundImg, width, height);
  background(lvl1.backgroundImg)
  textSize(25);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`Isn't nice? At this rate,
  you might be able to afford a
  second one soon`, width / 2, height / 5)
  pop()

  if (mouseIsPressed) {
    state = `lvl2`;
  }
}


function lvl2State() {
  checkXmasDecoSelected();
  lvl2.setbackground();
  lvl2.displayAssets();
  lvl2.setStrings();

}

function checkXmasDecoSelected() {
  if (mouseIsPressed) {
    // function mouseClicked() {
    if (mouseX > lvl2.candycaneX - lvl2.size / 2 &&
      mouseX < lvl2.candycaneX + lvl2.size / 2 &&
      mouseY > lvl2.candycaneY - lvl2.size / 2 &&
      mouseY < lvl2.candycaneY + lvl2.size / 2) {
      state = `fail`
    } else if (mouseX > lvl2.snowglobeX - lvl2.size / 2 &&
      mouseX < lvl2.snowglobeX + lvl2.size / 2 &&
      mouseY > lvl2.snowglobeY - lvl2.size / 2 &&
      mouseY < lvl2.snowglobeY + lvl2.size / 2) {
      state = `fail`
    } else if (mouseX > lvl2.xmasBallX - lvl2.size / 2 &&
      mouseX < lvl2.xmasBallX + lvl2.size / 2 &&
      mouseY > lvl2.xmasBallY - lvl2.size / 2 &&
      mouseY < lvl2.xmasBallY + lvl2.size / 2) {
      state = `fail`
    } else if (mouseX > lvl2.snowflakeX - lvl2.size / 2 &&
      mouseX < lvl2.snowflakeX + lvl2.size / 2 &&
      mouseY > lvl2.snowflakeY - lvl2.size / 2 &&
      mouseY < lvl2.snowflakeY + lvl2.size / 2) {
      state = `lvl2Success`
    }
  }
}

function lvl2Success() {
  push()
  lvl2.setbackground();
  lvl2.displayAssets();
  fill(239, 122, 98)
  noStroke();
  rect(width / 2, height / 2, 300, 200)
  textSize(25);
  fill(0);
  textAlign(CENTER, CENTER);
  text(`That's right,
  you little snowflake`, width / 2, height / 2)
  pop()

  if (mouseIsPressed) {
    state = `lvl3`;
  }
}

function lvl3State() {
  background(0)
}

function lvl3Success() {

}

function fail() {
  push()
  background(255, 0, 0)
  textSize(25)
  fill(0)
  textAlign(CENTER, CENTER)
  text(`This will result in -1 life.
    But until that is put in place...
    ya dead.`, width / 2, height / 2)
  pop()
}