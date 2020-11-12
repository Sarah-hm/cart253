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

  resize() {
    micLevel = mic.getLevel();
    this.uCornerX = width;
    this.uCornerY = height - micLevel * height;
    console.log(micLevel)
    // let y = map(height, 0)
  }

  displayString() {
    let string = threshold[i];

  }

  display() {
    push()
    rectMode(CORNERS)
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    rect(this.bCornerX, this.bCornerY, this.uCornerX, this.uCornerY)
    pop()
  }
}