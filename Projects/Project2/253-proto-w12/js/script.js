/**************************************************
Sarah Hontoy-Major - Project 02 Proposal;

This is my prototype to "A millenial's survival guide", my final project.

level 1 : buying a house (being able to afford the box);
level 2 : christmas deco (snowflake gen);
level 3: Confidence about future ('AAAH' mic input)

**************************************************/
"use strict";

let currentState;
let mic;
let micLevel;

//Title page variables
let titleImg;
let insNeutralImg;
let insHoverImg;

// Instruction page variables
let insPopUpImg;
let insBackButtonNeutralImg;
let insBackButtonHoverImg;

//Player's lives variables
let lives = [];
let numLives = 5;
let life;
let lifeImg;

//Level 1 variables;
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
let candycaneNeutralImg;
let candycaneHoverImg;
let snowflakeNeutralImg;
let snowflakeHoverImg;
let snowglobeNeutralImg;
let snowglobeHoverImg;
let xmasBallNeutralImg;
let xmasBallHoverImg;

//no level 3 variables

//level 4 variables
let lvl4babyNeutralImg;
let lvl4babyHoverImg;
let lvl4plantNeutralImg;
let lvl4plantHoverImg;
let lvl4catNeutralImg;
let lvl4catHoverImg;

function preload() {
  //title Page images
  titleImg = loadImage("assets/images/Title.png");
  insNeutralImg = loadImage("assets/images/insNeutral.png");
  insHoverImg = loadImage("assets/images/insHover.png");

  //instruction Page images
  insPopUpImg = loadImage("assets/images/insPopUpImg.png");
  insBackButtonNeutralImg = loadImage("assets/images/insBackButtonNeutral.png");
  insBackButtonHoverImg = loadImage("assets/images/insBackButtonHover.png");

  //Pixalated hearts for lives
  lifeImg = loadImage("assets/images/life.png");

  //level 1 images
  lvl1bgImg = loadImage("assets/images/lvl1_bg.png");
  house1NeutralImg = loadImage("assets/images/house1Neutral.png");
  house1HoverImg = loadImage("assets/images/house1Hover.png");
  house2NeutralImg = loadImage("assets/images/house2Neutral.png");
  house2HoverImg = loadImage("assets/images/house2Hover.png");
  house3NeutralImg = loadImage("assets/images/house3Neutral.png");
  house3HoverImg = loadImage("assets/images/house3Hover.png");
  boxNeutralImg = loadImage("assets/images/boxNeutral.png");
  boxHoverImg = loadImage("assets/images/boxHover.png");

  //level 2 images
  candycaneNeutralImg = loadImage("assets/images/candycaneNeutral.png");
  candycaneHoverImg = loadImage("assets/images/candycaneHover.png");
  snowflakeNeutralImg = loadImage("assets/images/snowflakeNeutral.png");
  snowflakeHoverImg = loadImage("assets/images/snowflakeHover.png");
  snowglobeNeutralImg = loadImage("assets/images/snowglobeNeutral.png");
  snowglobeHoverImg = loadImage("assets/images/snowglobeHover.png");
  xmasBallNeutralImg = loadImage("assets/images/xmasBallNeutral.png");
  xmasBallHoverImg = loadImage("assets/images/xmasBallHover.png");

  //level 4 images
  lvl4babyNeutralImg = loadImage("assets/images/lvl4BabyNeutral.png")
  lvl4babyHoverImg = loadImage("assets/images/lvl4BabyHover.png");
  lvl4plantNeutralImg = loadImage("assets/images/lvl4PlantNeutral.png");
  lvl4plantHoverImg = loadImage("assets/images/lvl4PlantHover.png");
  lvl4catNeutralImg = loadImage("assets/images/lvl4CatNeutral.png");
  lvl4catHoverImg = loadImage("assets/images/lvl4CatHover.png")
}

// (no images for level 3)

//Setting up canvas, universal modes, and Title page, Instruction Page and lvl 1 page classes
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  rectMode(CENTER);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

  //Set the current State to :
  currentState = new titlePage(); // Can be TitlePage, InstructionPage, Lvl1, Lvl2, ..., Lvl4.

  let x = 50;
  let y = (height / 15) * 14;
  let life = new Life(x, y);

  // //Set life array :
  for (let i = 0; i < numLives; i++) {
    let life = new Life(x, y);
    x = x + 80;
    lives.push(life);
    life.display();
  }
}

//Will check state every fram and react accordingly
function draw() {
  // background(230);
  // checkState()
  currentState.update();
  // life.update();
}

function mousePressed() {
  currentState.mousePressed();
}

function keyPressed() {
  currentState.keyPressed();
}

function keyTyped() {
  currentState.keyTyped();
}