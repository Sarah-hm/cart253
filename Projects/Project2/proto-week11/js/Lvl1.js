class Lvl1 extends State {

  //Construct a background, 3 houses and box that can be hovered over to change color.
  constructor({
    house1X,
    house1Y,
    house2X,
    house2Y,
    house3X,
    house3Y,
    boxX,
    boxY
  }) {
    super();

    //set instruction and lvl number
    this.numLvlString = `#1`;
    this.insString = `Today is the day.
     Go buy yourself a house.`

    this.backgroundImg = lvl1bgImg

    this.house1NeutralImg = house1NeutralImg
    this.house1HoverImg = house1HoverImg
    this.house1X = house1X;
    this.house1Y = house1Y;
    this.house1Width = 129;
    this.house1Height = 137;

    this.house2NeutralImg = house2NeutralImg
    this.house2HoverImg = house2HoverImg
    this.house2X = house2X;
    this.house2Y = house2Y;
    this.house2Width = 200;
    this.house2Height = 152;

    this.house3NeutralImg = house3NeutralImg
    this.house3HoverImg = house3HoverImg
    this.house2X = house2X;
    this.house3X = house3X;
    this.house3Y = house3Y;
    this.house3Width = 109;
    this.house3Height = 116;

    this.boxNeutralImg = boxNeutralImg
    this.boxHoverImg = boxHoverImg
    this.boxX = boxX;
    this.boxY = boxY;
    this.boxWidth = 49;
    this.boxHeight = 38;

    //Set the minimum time one should be in the 'success' state of the level
    this.successFrameStart = 0;
    this.successMessageMinLength = 60;
  }

  update() {

  }


  // Display road, flowers and 1 tree in a background image (.png)
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
    // I realize now the following could have easily been in an array. Will be changed  for project 02 (Neighborhood = [])

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

  //Display lvl number (#1) and the instructions to pass the level : need to 'buy a house' (select a living space).

  setStrings() {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 10 * 4, height / 10)
    pop()
  }


}