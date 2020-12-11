//This is the Game Over state where, you guessed it, the game is, well, over.
//An unimpressed kid blinks at you because he doesn't have anything to say about your lack of skills
//You can try again by clicking anywhere (brings you back to Title Page). 
class GameOver extends State {
  constructor() {
    super()
    this.string = `ya dead
    Not that I'm surprised or anything.
    You sure you're a millenial, though?
    Maybe try again. Or don't.
    Whatever.`

    this.stringX = width / 2;
    this.stringY = height / 3 * 2.1;

    this.GIF = gameOverGIF
    this.GIFx = width / 2
    this.GIFy = height / 3
  }

  update() {
    this.setBackground();
    this.setGIF();
    this.displayString();
  }

  setBackground() {
    background(255, 0, 0)
  }

  setGIF() {
    image(this.GIF, this.GIFx, this.GIFy)
  }

  displayString() {
    push()
    textSize(25)
    textFont(atkinsonBold)
    fill(0)
    textAlign(CENTER, CENTER);
    text(this.string, this.stringX, this.stringY)
    pop()
  }

  mousePressed() {
    let x = 50;
    for (let i = 0; i < numLives; i++) {
      let y = (height / 15) * 14;
      let life = new Life(x, y);
      x += 70;
      lives.push(life);
    }
    currentState = new TitlePage();

  }

}