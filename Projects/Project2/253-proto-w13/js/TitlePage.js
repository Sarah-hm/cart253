class TitlePage extends State {
  //Three main objects (+credits, eventually) : Title, Instruction button, 'start' string
  constructor() {
    super();
    this.titleX = width / 2;
    this.titleY = height / 5;
    this.titleWidth = 237;
    this.titleHeight = 72;
    this.insX = width / 2;
    this.insY = height / 2;
    this.insWidth = 147;
    this.insHeight = 44;
    this.startX = width / 2;
    this.startY = (height / 5) * 4;
    this.titleImg = titleImg;
    this.insNeutralImg = insNeutralImg;
    this.insHoverImg = insHoverImg;
    this.startString = `Press any keys to start`;
    //Will eventually set a sound when interacting with the instruction button


    this.currentInput = ``;
    this.magicWord = `any`

  }

  update() {
    background(230);
    this.displayTitle();
    this.displayInstructions();
    this.displayStartString();
    this.checkInput();
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

  mousePressed() {
    if (mouseX > this.insX - this.insWidth / 2 &&
      mouseX < this.insX + this.insWidth / 2 &&
      mouseY > this.insY - this.insHeight / 2 &&
      mouseY < this.insY + this.insHeight / 2) {
      currentState = new InstructionPage()
    }
  }


  // functions to see if 'any' was typed, as seen in Pippin's example

  checkInput() {
    let lowerCaseInput = this.currentInput.toLowerCase();
    if (lowerCaseInput === this.magicWord) {
      currentState = new Lvl1();
    }
  }

  keyTyped() {
    this.currentInput += key;
  }

  keyPressed() {
    if (keyCode === BACKSPACE) {
      this.currentInput = ``;
    }
  }

}