class InstructionPage {

  constructor({
    insPopUpX,
    insPopUpY,
    insBackButtonX,
    insBackButtonY
  }) {
    this.insPopUpX = insPopUpX;
    this.insPopUpY = insPopUpY;
    this.insPopUpSize = 407;
    this.insBackButtonX = insBackButtonX;
    this.insBackButtonY = insBackButtonY;
    this.insButtonsWidth = 147;
    this.insButtonsHeight = 44;
    this.insPopUpImg = insPopUpImg;
    this.insBackButtonNeutralImg = insBackButtonNeutralImg;
    this.insBackButtonHoverImg = insBackButtonHoverImg;
  }

  displayInstructionPopUp() {
    push();
    image(this.insPopUpImg, this.insPopUpX, this.insPopUpY, this.insPopUpSize, this.insPopUpSize);
    pop();
  }

  displayBackButton() {
    if (mouseX > this.insBackButtonX - this.insButtonWidth / 2 &&
      mouseX < this.insBackButtonX + this.insButtonWidth / 2 &&
      mouseY > this.insBackButtonY - this.insButtonHeight / 2 &&
      mouseY < this.insBackButtonY + this.insButtonHeight / 2) {
      push()
      image(this.insBackButtonHoverImg, this.insBackButtonX, this.insBackButtonY, this.insButtonWidth, this.insButtonHeight)
      pop()
    } else {
      push()
      image(this.insNeutralImg, this.insX, this.insY, this.insWidth, this.insHeight)
      pop()
    }
  }

}