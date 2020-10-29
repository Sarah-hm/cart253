class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 12;
    this.size = 30;
    this.active = true;
  }

  check() {
    //If the ball is off the canvas, then it no longer exists
    if (this.y - this.size / 2 > height) {
      return true
    } else {
      return false
    };
  }

  gravity(force) {
    // add gravitanional force to make the ball fall
    this.ay += force
  }

  move() {
    //add acceleration
    this.vx += this.ax
    this.vy += this.ay

    //constrain to maxSpeed
    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed)
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed)

    //add velocity to x, y position
    this.x += this.vx
    this.y += this.vy
  }

  //===== Make the balls bounce from the paddle =====
  bounce(paddle) {
    //if (ball is within the left edge of the  paddle and the right edge of the paddle) {bounce}
    if (this.x > paddle.x - paddle.width / 2 &&
      this.x < paddle.x + paddle.width / 2 &&
      this.y + this.size / 2 > paddle.y - paddle.height / 2 &&
      this.y - this.size / 2 < paddle.y + paddle.height / 2) {

      //bounce
      //the closer it is to the edge, the more velocity it is going to add (or subtract) from its original velocity
      // dx = difference in x axis
      let dx = this.x - paddle.x;
      this.vx += map(dx, -paddle.width / 2, paddle.width / 2, -2, 2)


      this.vy = -this.vy;
      this.ay = 0;
    }
  }

  // ===== Make the balls bounce back from the X walls ======
  wallBounce() {
    if (this.x >= width ||
      this.x <= 0) {
      this.vx = -this.vx
    }
  }

  display() {
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}