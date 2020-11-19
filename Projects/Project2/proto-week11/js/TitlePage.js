class TitlePage {
  //Three main objects (+credits, eventually) : Title, Instruction button, 'start' string
  constructor({
    titleX,
    titleY,
    insX,
    insY,
    startX,
    startY
  }) {
    this.titleX = titleX;
    this.titleY = titleY;
    this.titleWidth = 237;
    this.titleHeight = 72;
    this.insX = insX;
    this.insY = insY;
    this.insWidth = 147;
    this.insHeight = 44;
    this.startX = startX;
    this.startY = startY;
    this.titleImg = titleImg;
    this.insNeutralImg = insNeutralImg;
    this.insHoverImg = insHoverImg;
    this.startString = `Press any keys to start`;
    //Will eventually set a sound when interacting with the instruction button
  }

  //Display the image title 'A millennial's survival guide'
  displayTitle() {
    push();
    image(
      this.titleImg,
      this.titleX,
      this.titleY,
      this.titleWidth,
      this.titleHeight
    );
    pop();
  }


  //display instructions button, make it change color if you hover over it
  displayInstructions() {
    if (mouseX > this.insX - this.insWidth / 2 &&
      mouseX < this.insX + this.insWidth / 2 &&
      mouseY > this.insY - this.insHeight / 2 &&
      mouseY < this.insY + this.insHeight / 2) {
      push()
      image(this.insHoverImg, this.insX, this.insY, this.insWidth, this.insHeight)
      pop()
    } else {
      push()
      image(this.insNeutralImg, this.insX, this.insY, this.insWidth, this.insHeight)
      pop()
    }
  }

  //display 'Press any key to start' at the bottom center of the canvas
  displayStartString() {
    push()
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    text(this.startString, this.startX, this.startY);
    pop()
  }
}