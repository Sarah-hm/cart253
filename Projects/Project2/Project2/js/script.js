/**************************************************
Sarah Hontoy-Major - Project 02 Proposal;

This is my prototype to "A millenial's survival guide", my final project.

level 1 : buying a house (being able to afford the box);
level 2 : christmas deco (snowflake gen);
level 3: Confidence about future ('AAAH' mic input)
level 4: Getting something because you're lonely (plant)
level 5: having to get to work on time;


**************************************************/
"use strict";

let currentState;
let mic;
let micLevel;

//Fonts
let atkinsonNormal;
let atkinsonItalic;
let atkinsonBold;
let atkinsonBoldItalic;

// Sound effects
let fartSFX;
let partyHornSFX;
let gameOverSFX;

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
let lvl2bgImg;
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

//level 5 variables
let lvl5bgImg;
let lvl5startBgImg;
let lvl5AmbianceSounds;
let lvl5DemonstrationImg;
let lvl5CrowdSounds;
let lvl5DriverTowardsRImg;
let lvl5HonkSound

//gameOver variables
let gameOverGIF;

function preload() {
  //Fonts
  atkinsonNormal = loadFont(
    "assets/fonts/Atkinson-Hyperlegible-Regular-102.ttf"
  );
  atkinsonItalic = loadFont(
    "assets/fonts/Atkinson-Hyperlegible-Italic-102.ttf"
  );
  atkinsonBold = loadFont("assets/fonts/Atkinson-Hyperlegible-Bold-102.ttf");
  atkinsonBoldItalic = loadFont(
    "assets/fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf"
  );

  // sounds
  fartSFX = loadSound("assets/sounds/fart.wav");
  gameOverSFX = loadSound("assets/sounds/sadTrombone.wav");
  partyHornSFX = loadSound("assets/sounds/partyHorn.mp3");

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
  lvl2bgImg = loadImage("assets/images/lvl2_bg.jpg");
  candycaneNeutralImg = loadImage("assets/images/candycaneNeutral.png");
  candycaneHoverImg = loadImage("assets/images/candycaneHover.png");
  snowflakeNeutralImg = loadImage("assets/images/snowflakeNeutral.png");
  snowflakeHoverImg = loadImage("assets/images/snowflakeHover.png");
  snowglobeNeutralImg = loadImage("assets/images/snowglobeNeutral.png");
  snowglobeHoverImg = loadImage("assets/images/snowglobeHover.png");
  xmasBallNeutralImg = loadImage("assets/images/xmasBallNeutral.png");
  xmasBallHoverImg = loadImage("assets/images/xmasBallHover.png");

  // (no images for level 3)

  //level 4 images
  lvl4babyNeutralImg = loadImage("assets/images/lvl4BabyNeutral.png");
  lvl4babyHoverImg = loadImage("assets/images/lvl4BabyHover.png");
  lvl4plantNeutralImg = loadImage("assets/images/lvl4PlantNeutral.png");
  lvl4plantHoverImg = loadImage("assets/images/lvl4PlantHover.png");
  lvl4catNeutralImg = loadImage("assets/images/lvl4CatNeutral.png");
  lvl4catHoverImg = loadImage("assets/images/lvl4CatHover.png");

  //level 5 images
  lvl5bgImg = loadImage("assets/images/lvl5_bg.jpg");
  lvl5startBgImg = loadImage("assets/images/lvl5_bgStart.jpg");
  lvl5AmbianceSounds = loadSound("assets/sounds/citySounds.wav");
  lvl5DemonstrationImg = loadImage("assets/images/lvl5Demonstration.png");
  lvl5CrowdSounds = loadSound("assets/sounds/CrowdBoos.mp3");
  lvl5DriverTowardsRImg = loadImage("assets/images/lvl5driverTowardsR.png")
  lvl5HonkSound = loadSound("assets/sounds/honk.wav")

  //game Over
  gameOverGIF = loadImage("assets/images/unimpressedKid.gif");
}

//Setting up canvas, universal modes, and Title page, Instruction Page and lvl 1 page classes
function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  rectMode(CENTER);
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

  // Set the current State to :
  currentState = new Lvl5(); // Can be TitlePage, InstructionPage, Lvl1, Lvl2, ..., Lvl4.
  let x = 50;

  // //Set life array :
  for (let i = 0; i < numLives; i++) {
    let y = (height / 15) * 14;
    let life = new Life(x, y);
    x += 70;
    lives.push(life);
  }
}

//Will check state every fram and react accordingly
function draw() {
  currentState.update();

  //Restore lives if you went through gameover and start the game again
  if (currentState === new TitlePage()) {
    live.length = 5;
  }

  for (let i = 0; i < lives.length; i++) {
    let life = lives[i];
    life.update();
  }
}

function mousePressed() {
  currentState.mousePressed();

  //remove one life from array with :
  // lives.pop()
}

function keyPressed() {
  currentState.keyPressed();
}

function keyTyped() {
  currentState.keyTyped();
}