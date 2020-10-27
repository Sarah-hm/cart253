class Ball {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 10;
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
  }

  bounce() {
    //if this.y = the center, then adding half its size = bottom of the Ball
    // if (the bottom of the ball has hit the lower side of the canvas) {bounce off}

    if (this.y + this.size / 2 >= height) {
      this.vy = -this.vy;
      this.ay = 0;
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