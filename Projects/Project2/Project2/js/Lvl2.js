class Lvl2 extends State {
  constructor() {
    super();
    //set instruction and lvl number
    this.numLvlString = `#2`;
    this.insString = `Choose a christmas
decoration that best suit you`

    //Set the instruction's string color
    this.stringFill = {
      r: 255,
      g: 0,
      b: 0
    }

    //set background colour variables (very light green-ish blue)
    this.backgroundImg = lvl2bgImg

    //Fix universal size because it's a lot easier and life is hard(all assets are 200x200px)
    this.size = 200;

    // == set all 4 assets' variables (position, neutral image, hover image) == 
    //candycane
    this.candycaneNeutralImg = candycaneNeutralImg;
    this.candycaneHoverImg = candycaneHoverImg;
    this.candycaneX = width / 4;
    this.candycaneY = height / 5 * 1.75;

    //snowflake
    this.snowflakeNeutralImg = snowflakeNeutralImg;
    this.snowflakeHoverImg = snowflakeHoverImg;
    this.snowflakeX = width / 4 * 3;
    this.snowflakeY = height / 5 * 1.75;

    //snowglobe
    this.snowglobeNeutralImg = snowglobeNeutralImg;
    this.snowglobeHoverImg = snowglobeHoverImg;
    this.snowglobeX = width / 4;
    this.snowglobeY = height / 5 * 3.5;

    //Christmas tree ornament (called xmasBall for efficiency and because christmas tree ornament is effin long)
    this.xmasBallNeutralImg = xmasBallNeutralImg;
    this.xmasBallHoverImg = xmasBallHoverImg;
    this.xmasBallX = width / 4 * 3;
    this.xmasBallY = height / 5 * 3.5;
  }


  //Contain all functions that should loop during the entire level
  update() {
    this.setBackground();
    this.displayAssets();
    this.setStrings();
    this.success();
  }

  //Set the background
  setBackground() {
    push()
    imageMode(CORNER);
    image(this.backgroundImg, width, height);
    background(this.backgroundImg)
    pop()
  }

  // Display all four assets in an aligned 2x2 square way : line 1:  a candycane, snowflake, line2: snowglobe, christmas tree ornament(xmasBall)
  displayAssets() {
    //candycane
    if (mouseX > this.candycaneX - this.size / 2 &&
      mouseX < this.candycaneX + this.size / 2 &&
      mouseY > this.candycaneY - this.size / 2 &&
      mouseY < this.candycaneY + this.size / 2) {
      push()
      image(this.candycaneHoverImg, this.candycaneX, this.candycaneY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.candycaneNeutralImg, this.candycaneX, this.candycaneY, this.size, this.size)
      pop()
    }

    //snowflake;
    if (mouseX > this.snowflakeX - this.size / 2 &&
      mouseX < this.snowflakeX + this.size / 2 &&
      mouseY > this.snowflakeY - this.size / 2 &&
      mouseY < this.snowflakeY + this.size / 2) {
      push()
      image(this.snowflakeHoverImg, this.snowflakeX, this.snowflakeY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.snowflakeNeutralImg, this.snowflakeX, this.snowflakeY, this.size, this.size)
      pop()
    }

    //snowglobe;
    if (mouseX > this.snowglobeX - this.size / 2 &&
      mouseX < this.snowglobeX + this.size / 2 &&
      mouseY > this.snowglobeY - this.size / 2 &&
      mouseY < this.snowglobeY + this.size / 2) {
      push()
      image(this.snowglobeHoverImg, this.snowglobeX, this.snowglobeY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.snowglobeNeutralImg, this.snowglobeX, this.snowglobeY, this.size, this.size)
      pop()
    }

    //xmasBall;
    if (mouseX > this.xmasBallX - this.size / 2 &&
      mouseX < this.xmasBallX + this.size / 2 &&
      mouseY > this.xmasBallY - this.size / 2 &&
      mouseY < this.xmasBallY + this.size / 2) {
      push()
      image(this.xmasBallHoverImg, this.xmasBallX, this.xmasBallY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.xmasBallNeutralImg, this.xmasBallX, this.xmasBallY, this.size, this.size)
      pop()
    }
  }

  //Display lvl number and the instructions to succeed
  setStrings() {
    push();
    textAlign(TOP, LEFT);
    textFont(atkinsonBold)
    textSize(32);
    fill(this.stringFill.r, this.stringFill.g, this.stringFill.b);
    text(this.numLvlString, width / 20, height / 20);
    text(this.insString, width / 20, height / 10)
    pop()
  }

  //If you click on the candycane, snowglobe or christmas ornament (xmasBall) you fail (-1 life), if you click on the snowflake, you win.
  mousePressed() {
    if (mouseX > this.candycaneX - this.size / 2 &&
      mouseX < this.candycaneX + this.size / 2 &&
      mouseY > this.candycaneY - this.size / 2 &&
      mouseY < this.candycaneY + this.size / 2) {
      this.fail();
    } else if (mouseX > this.snowglobeX - this.size / 2 &&
      mouseX < this.snowglobeX + this.size / 2 &&
      mouseY > this.snowglobeY - this.size / 2 &&
      mouseY < this.snowglobeY + this.size / 2) {
      this.fail();
    } else if (mouseX > this.xmasBallX - this.size / 2 &&
      mouseX < this.xmasBallX + this.size / 2 &&
      mouseY > this.xmasBallY - this.size / 2 &&
      mouseY < this.xmasBallY + this.size / 2) {
      this.fail();
    } else if (mouseX > this.snowflakeX - this.size / 2 &&
      mouseX < this.snowflakeX + this.size / 2 &&
      mouseY > this.snowflakeY - this.size / 2 &&
      mouseY < this.snowflakeY + this.size / 2) {
      this.lvlWon = true;
      this.successFrameStart = frameCount;
    }

  }

  //A success string will appear and you'll be able to get to the next level after a set amount of seconds.
  success() {
    if (this.lvlWon) {
      push();
      this.setBackground();
      this.playWinSFX();
      fill(239, 122, 98)
      noStroke();
      rect(width / 2, height / 2, 300, 200)
      textSize(25);
      textFont(atkinsonBold)
      fill(0);
      textAlign(CENTER, CENTER);
      text(`That's right,
    you precious snowflake`, width / 2, height / 2)
      pop()

      if (mouseIsPressed &&
        frameCount > this.successFrameStart + this.successMessageMinLength) {
        currentState = new Lvl3
      }
    }
  }
}