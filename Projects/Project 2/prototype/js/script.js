/**************************************************
Sarah Hontoy-Major - Project 02 Proposal;

This is my prototype to "A millenial's survival guide", my final project.
This is my attempt to write the landing page of my game, the instruction page,
as well as the first level.
**************************************************/
"use strict";

let state = `titlePage`; //Can be titlePage, instructionPage, lvl1

let titlePage;
let titleImg;
let insNeutralImg;
let insHoverImg;

let instructionPage;
let insPopUpImg;
let insBackButtonNeutralImg;
let insBackButtonHoverImg;

function preload() {
  titleImg = loadImage("assets/images/Title.png");
  insNeutralImg = loadImage("assets/images/insNeutral.png");
  insHoverImg = loadImage("assets/images/insHover.png");

  insPopUpImg = loadImage("assets/images/insPopUpImg.png")
  insBackButtonNeutralImg = loadImage("assets/images/insBackButtonNeutral.png");
  insBackButtonHoverImg = loadImage("assets/images/insBackButtonHover.png")
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(600, 600);
  background(230);
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
  let insPopUpX = width / 2
  let insPopUpY = height / 2

  let insBackButtonX = width / 2
  let insBackButtonY = height / 5 * 4

  instructionPage = new InstructionPage({
    insPopUpX,
    insPopUpY,
    insBackButtonX,
    insBackButtonY
  })
}

// draw()
//
// Description of draw() goes here.
function draw() {
  checkInstructionOrState()
  checkState()
}

function checkInstructionOrState() {
  let magicWord = `any`
  let currentInput = ``;
  if (mouseIsPressed) {
    if (mouseX > titlePage.insX - titlePage.insWidth / 2 &&
      mouseX < titlePage.insX + titlePage.insWidth / 2 &&
      mouseY > titlePage.insY - titlePage.insHeight / 2 &&
      mouseY < titlePage.insY + titlePage.insHeight / 2) {
      state = `instructionPage`
    }
  }
  // else if ()
}

function checkState() {
  if (state === `titlePage`) {
    titlePageState();
  } else if (state === `instructionPage`) {
    instructionPageState();
  } else if (state === `lvl1`) {
    lvl1State();
  }
}

function titlePageState() {
  titlePage.displayTitle();
  titlePage.displayInstructions();
  titlePage.displayStartString();
}

function instructionPageState() {
  instructionPage.displayInstructionPopUp();
}