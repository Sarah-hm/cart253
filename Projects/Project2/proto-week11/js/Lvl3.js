class Lvl3 {
  constructor(x, y) {
    //set instruction and lvl number
    this.numLvlString = `#3`;
    this.insString = `On a scale from 'I got this' to
    'AAAAAAH', how confident do you feel
    about the future?`

    //bottom corner will never change
    this.bCornerX = 0;
    this.bCornerY = height;
    //upper corner is responsive to sound input
    this.uCornerX = x;
    this.uCornerY = y;
    //Red/Orange-ish color
    this.fill = {
      r: 239,
      g: 122,
      b: 98
    };

    this.bgFill = {
      r: 204,
      g: 231,
      b: 98
    }
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
    lvl3DecimalIndex = map(this.uCornerY, height, 0, 0, lvl3StringArray.length);
    lvl3CurrentLine = int(lvl3DecimalIndex);

    //Display the string
    push()
    textAlign(CENTER, CENTER)
    textSize(32)
    text(lvl3StringArray[lvl3CurrentLine], width / 2, height / 2)
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
}