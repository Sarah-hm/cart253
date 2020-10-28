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

    //If the ball is off the canvas, then it no longer exists
    if (this.y - this.size / 2 > height) {
      this.active = false
    }

    //Constrain to canvas (except height of canvas to fall)
    this.x = constrain(this.x, 0, width)
  }

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

    //if this.y = the center, then adding half its size = bottom of the Ball
    // if (the bottom of the ball has hit the lower side of the canvas) {bounce off}
    // if (this.y + this.size / 2 >= height) {
    // this.vy = -this.vy;
    // this.ay = 0;
  }


  display() {
    push();
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();
  }
}