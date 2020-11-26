class Lvl5 extends State {
  constructor() {
    super();

    this.userX = width / 2;
    this.userY = height - 10;

    this.width = 10
    this.height = 30

    this.speed = 0;
    this.maxSpeed = 4;
    this.angle = 0;
    this.turnMax = 0.1;

    this.fill = {
      r: 255,
      g: 255,
      b: 255
    }
    this.bgFill = {
      r: 205,
      g: 231,
      b: 227,

    }
  }

  update() {
    this.setBackground();
    this.steer();
    this.move();
    this.displayUser()
  }

  setBackground() {
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b);
  }

  steer() {
    // LEFT and RIGHT arrows turn the bike
    if (keyIsDown(LEFT_ARROW)) {
      this.angle -= this.turnMax;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.angle += this.turnMax;
    }

    // UP arrow sets speed to max, otherwise the bike stops
    if (keyIsDown(UP_ARROW)) {
      this.speed = this.maxSpeed;
    } else {
      this.speed = 0;
    }
  }

  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);

    this.userX += vx;
    this.userY += vy;
  }

  displayUser() {
    push()
    rectMode(CENTER);
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    translate(this.userX, this.userY);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop()
  }

  success() {
    if (this.lvlWon) {
      this.setBackground();
      this.displayAssets();
      fill(239, 122, 98)
      noStroke();
      rect(width / 2, height / 2, 300, 200)
      textSize(25);
      fill(0);
      textAlign(CENTER, CENTER);
      text(`Well... You could have still came
        a bit early. It's like you don't
        even care about this company?`, width / 2, height / 2)
      pop()

      if (mouseIsPressed &&
        frameCount > this.successFrameStart + this.successMessageMinLength) {
        currentState = new Lvl5
      }
    }
  }
}