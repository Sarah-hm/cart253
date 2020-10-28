class Paddle {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2
  }

  // User moves only horizontally with the mouse
  move() {
    this.x = mouseX;
  }


  display() {
    push()
    fill(255);
    noStroke()
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height)
    pop()
  }
}