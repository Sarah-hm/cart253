class Paddle {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = width / 2;
    this.y = height - this.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.speed = 15
  }

  // this moves only horizontally with the mouse
  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
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