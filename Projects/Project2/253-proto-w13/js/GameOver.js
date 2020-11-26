class GameOver extends State {
  constructor() {
    super()
    this.string = `This will result in -1 life.
But until that is put in place... ya dead.
Click to go back to title page`
  }

  update() {
    this.setBackground();
    this.displayString();
  }

  setBackground() {
    background(255, 0, 0)
  }

  displayString() {
    push()
    textSize(25)
    fill(0)
    textAlign(CENTER, CENTER);
    text(this.string, width / 2, height / 2)
    pop()
  }

  mousePressed() {
    currentState = new TitlePage();
  }

}