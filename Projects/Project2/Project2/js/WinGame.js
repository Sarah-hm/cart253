//This is the WinGame state where, you guessed it, the game states that you won. But to what price?
//An annoyed Jake Peralta (Andy Samberg) tells you you won
//You can try again by clicking anywhere (brings you back to Title Page).
class WinGame extends State {
  constructor() {
    super()
    this.string = `Life is so simple for this generation.
Back in my days there would have be HUNDREDS
of these levels. But I guess you win.
You might be ready for the real world after all.`

    this.stringX = width / 2;
    this.stringY = height / 3 * 2.1;

    this.GIF = winGameGIF
    this.GIFx = width / 2
    this.GIFy = height / 3
  }

  update() {
    this.setBackground();
    this.setGIF();
    this.displayString();
  }

  setBackground() {
    background(0, 255, 0)
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