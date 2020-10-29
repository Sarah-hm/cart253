class Square {

  //Set square (that is not a square oops) construction
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50
    this.height = 15

  }

  // Check to see if square has collided with ball; return true if so.
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

  //Display the square-that-is-not-a-square 
  display() {

    push()
    fill(255);
    noStroke()
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height)
    pop()

  }
}