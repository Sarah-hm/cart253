class Lvl4 extends State {
  constructor() {
    super();
    //set instruction and lvl number
    this.numLvlString = '#4'
    this.numLvlStringX = width / 10;
    this.numLvlStringY = height / 20;
    this.insString = `You feel lonely.
    What do you get?`
    this.insStringX = width / 2;
    this.insStringY = height / 10 * 2;

    //set background colour
    this.bgFill = {
      r: 240,
      g: 175,
      b: 178,
    }

    //The baby
    this.babyNeutralImg = lvl4babyNeutralImg;
    this.babyHoverImg = lvl4babyHoverImg;
    this.babyX = width / 7 * 2;
    this.babyY = height / 5 * 2;

    //The plant
    this.plantNeutralImg = lvl4plantNeutralImg;
    this.plantHoverImg = lvl4plantHoverImg;
    this.plantX = width / 2;
    this.plantY = height / 7 * 5;

    //The cat
    this.catNeutralImg = lvl4catNeutralImg;
    this.catHoverImg = lvl4catHoverImg;
    this.catX = width / 7 * 5;
    this.catY = height / 5 * 2;

    // assets size are universal for all 3 because life is too short to create them separately
    this.sizeX = 200;
    this.sizeY = 253;
    this.scale = 0.5;

    this.successFrameStart = 0;
    this.successMessageMinLength = 60;
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
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b)
  }

  displayAssets() {
    //baby
    if (mouseX > this.babyX - this.sizeX / 2 &&
      mouseX < this.babyX + this.sizeX / 2 &&
      mouseY > this.babyY - this.sizeY / 2 &&
      mouseY < this.babyY + this.sizeY / 2) {
      push()
      scale(1.1)
      translate(-this.sizeX / 10, -this.sizeY / 10)
      image(this.babyHoverImg, this.babyX, this.babyY, this.sizeX, this.sizeY)
      pop()
    } else {
      push()
      image(this.babyNeutralImg, this.babyX, this.babyY, this.sizeX, this.sizeY)
      pop()
    }

    //plant
    if (mouseX > this.plantX - this.sizeX / 2 &&
      mouseX < this.plantX + this.sizeX / 2 &&
      mouseY > this.plantY - this.sizeY / 2 &&
      mouseY < this.plantY + this.sizeY / 2) {
      push()
      imageMode(CENTER)
      scale(1.1)
      translate(-this.sizeX / 10, -this.sizeY / 10 * 2)
      image(this.plantHoverImg, this.plantX, this.plantY, this.sizeX, this.sizeY)

      pop()
    } else {
      push()
      imageMode(CENTER)
      image(this.plantNeutralImg, this.plantX, this.plantY, this.sizeX, this.sizeY)
      pop()
    }

    //cat
    if (mouseX > this.catX - this.sizeX / 2 &&
      mouseX < this.catX + this.sizeX / 2 &&
      mouseY > this.catY - this.sizeY / 2 &&
      mouseY < this.catY + this.sizeY / 2) {
      push()
      scale(1.1)
      translate(-this.sizeX / 10 * 2, -this.sizeY / 10)
      image(this.catHoverImg, this.catX, this.catY, this.sizeX, this.sizeY)
      pop()
    } else {
      push()
      image(this.catNeutralImg, this.catX, this.catY, this.sizeX, this.sizeY)
      pop()
    }
  }

  //Display lvl number and the instructions to succeed
  setStrings() {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 5 * 2, height / 10)
  }


  //If you click on either the baby or the cat, you fail (-1 life), if you click on the plant, you succeed.
  mousePressed() {
    if (mouseX > this.babyX - this.sizeX / 2 &&
      mouseX < this.babyX + this.sizeX / 2 &&
      mouseY > this.babyY - this.sizeY / 2 &&
      mouseY < this.babyY + this.sizeY / 2) {
      this.fail();
    } else if (mouseX > this.catX - this.sizeX / 2 &&
      mouseX < this.catX + this.sizeX / 2 &&
      mouseY > this.catY - this.sizeY / 2 &&
      mouseY < this.catY + this.sizeY / 2) {
      this.fail();
    } else if (mouseX > this.plantX - this.sizeX / 2 &&
      mouseX < this.plantX + this.sizeX / 2 &&
      mouseY > this.plantY - this.sizeY / 2 &&
      mouseY < this.plantY + this.sizeY / 2) {
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
      this.displayAssets();
      fill(239, 122, 98)
      noStroke();
      rect(width / 2, height / 2, 300, 200)
      textSize(25);
      fill(0);
      textAlign(CENTER, CENTER);
      text(`You can definitely find
  more space on the shelf
  for this one`, width / 2, height / 2)
      pop()

      if (mouseIsPressed &&
        frameCount > this.successFrameStart + this.successMessageMinLength) {
        currentState = new Lvl5
      }
    }
  }
}