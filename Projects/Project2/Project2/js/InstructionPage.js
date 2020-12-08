class InstructionPage extends State {

  // Construct an image of a text(instructions), frame and button to go back to title page.
  constructor() {
    super();
    this.insPopUpX = width / 2;
    this.insPopUpY = height / 2;
    this.insPopUpSize = 407;
    this.insBackButtonX = width / 2;
    this.insBackButtonY = height / 10 * 9;
    this.insButtonsWidth = 147;
    this.insButtonsHeight = 44;
    this.insPopUpImg = insPopUpImg;
    this.insBackButtonNeutralImg = insBackButtonNeutralImg;
    this.insBackButtonHoverImg = insBackButtonHoverImg;


  }

  update() {
    this.displayInstructionPopUp();
    this.displayBackButton();

  }

  //Display image of a framed rounded rectangle with text explaining the goal of the game.
  displayInstructionPopUp() {
    push();
    image(this.insPopUpImg, this.insPopUpX, this.insPopUpY, this.insPopUpSize, this.insPopUpSize);
    pop();
  }

  //Display the button to go back to the title page.
  //(There will eventually have another button for 'more info' if needed. If not needed, it'll just be a joke of some kind. :)  )
  displayBackButton() {
    if (mouseX > this.insBackButtonX - this.insButtonsWidth / 2 &&
      mouseX < this.insBackButtonX + this.insButtonsWidth / 2 &&
      mouseY > this.insBackButtonY - this.insButtonsHeight / 2 &&
      mouseY < this.insBackButtonY + this.insButtonsHeight / 2) {
      push()
      image(this.insBackButtonHoverImg, this.insBackButtonX, this.insBackButtonY, this.insButtonWidth, this.insButtonHeight)
      pop()
    } else {
      push()
      image(this.insBackButtonNeutralImg, this.insBackButtonX, this.insBackButtonY, this.insButtonWidth, this.insButtonHeight)
      pop()
    }
  }

  mousePressed() {
    if (mouseX > this.insBackButtonX - this.insButtonsWidth / 2 &&
      mouseX < this.insBackButtonX + this.insButtonsWidth / 2 &&
      mouseY > this.insBackButtonY - this.insButtonsHeight / 2 &&
      mouseY < this.insBackButtonY + this.insButtonsHeight / 2) {
      currentState = new TitlePage();
    }
  }

}