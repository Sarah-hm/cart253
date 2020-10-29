class Square {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50
    this.height = 15

  }

  collide(ball) {

    if (ball.x > this.x - this.width / 2 &&
      ball.x < this.x + this.width / 2 &&
      ball.y > this.y - this.height / 2 &&
      ball.y < this.y + this.height / 2) {
      return true;
    } else {
      return false
    };
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