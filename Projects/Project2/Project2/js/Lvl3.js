class Lvl3 extends State {
  constructor() {
    super();
    //set instruction and lvl number
    this.numLvlString = `#3`;
    this.insString = `On a scale from 'I got this' to
    'AAAAAAH', how confident do you feel
    about the future?`

    //bottom corner will never change
    this.buttomCornerX = 0;
    this.buttomCornerY = height;
    //upper corner is responsive to sound input
    this.upperCornerX = width;
    this.upperCornerY = 0;
    //
    // Mic Level Strings related parameters (array, current line, decimal index)
    this.stringArray = [` `, `I don't believe it`, `Let's not pretend, here`, `Yeah, that sounds about right`]
    this.currentLine = 0;
    this.decimalIndex = 0;
    //Red/Orange-ish color
    this.fill = {
      r: 239,
      g: 122,
      b: 98
    };
    //background Color
    this.bgFill = {
      r: 204,
      g: 231,
      b: 98
    }
  }

  //Contain all functions that should loop during the entire level
  update() {
    this.setBackground();
    this.resize();
    this.displayRectangle();
    this.displayMicLevelStrings();
    this.setStrings();
    this.checkRectHeight();
    this.success();
  }

  //Set the background
  setBackground() {
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b)
  }

  //Resizing the orange rectangle based on mic level input (The louder the sound, the bigger the height of the rect)
  resize() {
    micLevel = mic.getLevel(1);
    this.upperCornerX = width;
    //start at 20 lower the bottom line to exempt small noises from environment
    //micLevel of .5 will get to top of canvas (miclevel = 2 * the height of canvas)
    this.upperCornerY = map(micLevel, 0, 0.75, height, 0)
    console.log(micLevel)
  }

  //Display orange rectangle from the (0, height) corner to (width, [variable based on audio input)])
  displayRectangle() {
    push()
    rectMode(CORNERS)
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    rect(this.buttomCornerX, this.buttomCornerY, this.upperCornerX, this.upperCornerY)
    pop()
  }

  // ==== Display Strings ====
  //check which specific strings should appear based on the rectangle's height
  displayMicLevelStrings() {
    this.decimalIndex = map(this.upperCornerY, height, 0, 0, this.stringArray.length);
    this.currentLine = int(this.decimalIndex);

    //Display the string
    push()
    textAlign(CENTER, CENTER)
    textSize(32)
    text(this.stringArray[this.currentLine], width / 2, height / 2)
    pop()
  }

  //Display lvl number and the instructions to succeed
  setStrings() {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 2, height / 10 * 2)
    pop()
  }

  checkRectHeight() {
    if (this.upperCornerY < 0) {
      this.lvlWon = true;
      this.successFrameStart = frameCount;
    }
  }

  //A success string will appear and you'll be able to get to the next level after a set amount of seconds.
  success() {
    if (this.lvlWon) {
      push()
      this.playWinSFX();
      background(this.fill.r, this.fill.g, this.fill.b)
      textSize(25);
      fill(this.bgFill.r, this.bgFill.g, this.bgFill.b);
      textAlign(CENTER, CENTER);
      text(`I'd like to scream into
    the void more often, too.
    Anyhoo, let's keep going.`, width / 2, height / 2)
      pop()

      if (mouseIsPressed &&
        frameCount > this.successFrameStart + this.successMessageMinLength) {
        currentState = new Lvl4();
      }
    }
  }
}