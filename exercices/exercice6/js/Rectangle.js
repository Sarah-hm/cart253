class Rectangle {
  constructor(x, y) {
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
  display() {
    push()
    rectMode(CORNERS)
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    rect(this.bCornerX, this.bCornerY, this.uCornerX, this.uCornerY)
    pop()
  }

  // ==== Display String ====
  //Decide what string is going to display based on rect height
  displayString() {
    decimalIndex = map(this.uCornerY, height, 0, 0, stringArray.length);
    currentLine = int(decimalIndex);

    //Display the string
    push()
    textAlign(CENTER, CENTER)
    textSize(32)
    text(stringArray[currentLine], width / 2, height / 2)
    pop()
  }


}