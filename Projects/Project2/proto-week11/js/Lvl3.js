class Lvl3 extends State {
  constructor() {
    super();
    //set instruction and lvl number
    this.numLvlString = `#3`;
    this.insString = `On a scale from 'I got this' to
    'AAAAAAH', how confident do you feel
    about the future?`

    //bottom corner will never change
    this.bCornerX = 0;
    this.bCornerY = height;
    //upper corner is responsive to sound input
    this.uCornerX = width;
    this.uCornerY = 0;
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

  update() {
    this.setBackground();
    this.resize();
    this.displayRectangle();
    this.displayMicLevelStrings();
    this.setStrings();
    this.checkRectHeight();
  }

  setBackground() {
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b)
  }

  //==== Resizing the orange rectangle based on mic level input ====
  // The louder the sound, the bigger the height of the rect
  resize() {
    micLevel = mic.getLevel(1);
    this.uCornerX = width;
    //start at 20 lower the bottom line to exempt small noises from environment
    //micLevel of .5 will get to top of canvas (miclevel = 2 * the height of canvas)
    this.uCornerY = height + 20 - micLevel * (height * 2);
    console.log(micLevel)
  }

  //==== display the orange rectangle =====
  displayRectangle() {
    push()
    rectMode(CORNERS)
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    rect(this.bCornerX, this.bCornerY, this.uCornerX, this.uCornerY)
    pop()
  }

  // ==== Display String ====
  //Decide what string is going to display based on rect height
  displayMicLevelStrings() {
    this.decimalIndex = map(this.uCornerY, height, 0, 0, this.stringArray.length);
    this.currentLine = int(this.decimalIndex);

    //Display the string
    push()
    textAlign(CENTER, CENTER)
    textSize(32)
    text(this.stringArray[this.currentLine], width / 2, height / 2)
    pop()
  }


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
    if (this.uCornerY < 0) {
      currentState = new Lvl4();
    }
  }

  success() {
    push()
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