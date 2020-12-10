//Level 1 is asking you to choose between Living Spaces which one you should buy.
// 4 choices are available and can be hovered over for clearer identification.
// Choosing any of the houses will result in -1 life
// The solution is to click on the box, because it is the only thing millenials can afford in this economy *cue: cheering crowd*

class Lvl1 extends State {

  //Construct a background, 3 houses and box that can be hovered over to change color.
  constructor() {
    super();

    //set instruction and lvl number
    this.numLvlString = `#1`;
    this.insString = `Today is the day.
     Go buy yourself a house.`

    //Background Variables
    this.backgroundImg = lvl1bgImg

    //house 1 variables (img, position, size)
    this.house1NeutralImg = house1NeutralImg
    this.house1HoverImg = house1HoverImg
    this.house1X = width / 4 * 3;
    this.house1Y = height / 6 * 5;
    this.house1Width = 129;
    this.house1Height = 137;

    //house 2 variables (img, position, size)
    this.house2NeutralImg = house2NeutralImg
    this.house2HoverImg = house2HoverImg
    this.house2X = width / 5;
    this.house2Y = height / 16 * 7;
    this.house2Width = 200;
    this.house2Height = 152;

    //house 3 variables (img, position, size)
    this.house3NeutralImg = house3NeutralImg
    this.house3HoverImg = house3HoverImg
    this.house3X = width / 7 * 6;
    this.house3Y = height / 10 * 3;;
    this.house3Width = 109;
    this.house3Height = 116;

    //box variables (img, position, size)
    this.boxNeutralImg = boxNeutralImg
    this.boxHoverImg = boxHoverImg
    this.boxX = width / 2;
    this.boxY = height / 10 * 4.75;
    this.boxWidth = 49;
    this.boxHeight = 38;


  }

  //Contain all functions that should loop during the entire level
  update() {
    this.setbackground();
    this.setLivingSpaces();
    this.setStrings();
    this.success();
  }


  //Set the background
  setbackground() {
    push()
    imageMode(CORNER);
    image(this.backgroundImg, width, height);
    background(this.backgroundImg)
    pop()
  }

  //Display 3 houses and 1 box that can be hovered over to change colour to hint at possible interactivity.
  setLivingSpaces() {
    push()

    //house 1
    if (mouseX > this.house1X - this.house1Width / 2 &&
      mouseX < this.house1X + this.house1Width / 2 &&
      mouseY > this.house1Y - this.house1Height / 2 &&
      mouseY < this.house1Y + this.house1Height / 2) {
      push()
      image(this.house1HoverImg, this.house1X, this.house1Y, this.house1Width, this.house1Height)
      pop()
    } else {
      push()
      image(this.house1NeutralImg, this.house1X, this.house1Y, this.house1Width, this.house1Height)
      pop()
    }

    //house 2
    if (mouseX > this.house2X - this.house2Width / 2 &&
      mouseX < this.house2X + this.house2Width / 2 &&
      mouseY > this.house2Y - this.house2Height / 2 &&
      mouseY < this.house2Y + this.house2Height / 2) {
      push()
      image(this.house2HoverImg, this.house2X, this.house2Y, this.house2Width, this.house2Height)
      pop()
    } else {
      push()
      image(this.house2NeutralImg, this.house2X, this.house2Y, this.house2Width, this.house2Height)
      pop()
    }

    //house 3
    if (mouseX > this.house3X - this.house3Width / 2 &&
      mouseX < this.house3X + this.house3Width / 2 &&
      mouseY > this.house3Y - this.house3Height / 2 &&
      mouseY < this.house3Y + this.house3Height / 2) {
      push()
      image(this.house3HoverImg, this.house3X, this.house3Y, this.house3Width, this.house3Height)
      pop()
    } else {
      push()
      image(this.house3NeutralImg, this.house3X, this.house3Y, this.house3Width, this.house3Height)
      pop()
    }

    //box
    if (mouseX > this.boxX - this.boxWidth / 2 &&
      mouseX < this.boxX + this.boxWidth / 2 &&
      mouseY > this.boxY - this.boxHeight / 2 &&
      mouseY < this.boxY + this.boxHeight / 2) {
      push()
      image(this.boxHoverImg, this.boxX, this.boxY, this.boxWidth, this.boxHeight)
      pop()
    } else {
      push()
      image(this.boxNeutralImg, this.boxX, this.boxY, this.boxWidth, this.boxHeight)
      pop()
    }
  }

  //Display lvl number and the instructions to succeed
  setStrings() {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 10 * 4, height / 10)
    pop()
  }

  //If you click on any houses, you fail (-1 life), if you click on the box you win (but do you WIN, though? hmm...)
  mousePressed() {
    if (mouseX > this.house1X - this.house1Width / 2 &&
      mouseX < this.house1X + this.house1Width / 2 &&
      mouseY > this.house1Y - this.house1Height / 2 &&
      mouseY < this.house1Y + this.house1Height / 2) {
      this.fail();
    } else if (mouseX > this.house2X - this.house2Width / 2 &&
      mouseX < this.house2X + this.house2Width / 2 &&
      mouseY > this.house2Y - this.house2Height / 2 &&
      mouseY < this.house2Y + this.house2Height / 2) {
      // currentState = new GameOver();
      this.fail();
    } else if (mouseX > this.house3X - this.house3Width / 2 &&
      mouseX < this.house3X + this.house3Width / 2 &&
      mouseY > this.house3Y - this.house3Height / 2 &&
      mouseY < this.house3Y + this.house3Height / 2) {
      this.fail();
    } else if (mouseX > this.boxX - this.boxWidth / 2 &&
      mouseX < this.boxX + this.boxWidth / 2 &&
      mouseY > this.boxY - this.boxHeight / 2 &&
      mouseY < this.boxY + this.boxHeight / 2) {
      this.lvlWon = true;
      this.successFrameStart = frameCount;
      // console.log(this.successFrameStart)
    }
  }

  //A success string will appear and you'll be able to get to the next level after a set amount of seconds.
  success() {
    if (this.lvlWon) {
      push()
      this.playWinSFX();
      imageMode(CORNER);
      image(this.backgroundImg, width, height);
      background(this.backgroundImg)
      textSize(25);
      fill(0);
      textAlign(CENTER, CENTER);
      text(`Isn't nice? At this rate,
  you might be able to afford a
  second one soon`, width / 2, height / 5)
      pop()

      if (mouseIsPressed &&
        frameCount > this.successFrameStart + this.successMessageMinLength) {
        currentState = new Lvl2();
      }
    }
  }
}