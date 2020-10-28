class Square {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50
    this.height = 15
    this.active = true;
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