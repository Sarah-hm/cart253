class Lvl5 extends State {
  constructor() {
    super();

    this.startBgImg = lvl5startBgImg;
    this.playingBgImg = lvl5bgImg;
    this.ambianceSound = lvl5AmbianceSounds;
    this.soundPlaying = false;

    this.userX = width / 2;
    this.userY = height - 10;

    this.width = 30
    this.height = 10

    this.speed = 0;
    this.maxSpeed = 3;
    this.angle = 0;
    this.turnMax = 0.08;

    this.fill = {
      r: 255,
      g: 255,
      b: 255
    }

    //set x , y variables to constrain user to be on the street (and not on the house blocks)
    this.leftBlocksX = 191;
    this.rightBlocksX = width - 191;

    this.upperBlocksY = 229;
    this.lowerBlocksY = height - 209;

  }

  update() {
    this.setBackground();
    this.setAmbianceSound();
    this.steer();
    this.constrainOnHorizontalStreet();
    this.constrainOnVerticalStreet();
    this.move();
    this.displayUser()
  }

  setBackground() {

    if (this.userX === width / 2 && this.userY === height - 10) {
      push()
      imageMode(CORNER);
      image(this.startBgImg, width, height);
      background(this.startBgImg)
      pop()
    } else {
      push()
      imageMode(CORNER);
      image(this.playingBgImg, width, height);
      background(this.playingBgImg)
      pop()
    }
  }

  setAmbianceSound() {

    if (!this.ambianceSound.isPlaying()) {
      this.ambianceSound.play()
    }

    // if (this.soundPlaying === false) {
    //   this.ambianceSound.play();
    //   this.soundPlaying = true;
    // }
    // if (this.soundPlaying === true) {
    //   this.ambianceSound.onended(this.resetSound())
    // }
    // this.ambianceSound.loop();


    // if (this.soundPlaying === false) {
    //   this.ambianceSound.play();
    //   this.soundPlaying = true;
    // }
    // this.ambianceSound.play();
  }

  // resetSound() {
  //   this.soundPlaying === false;
  // }

  //Steer() and move() were taken from Pippin's example pages from Traffic Inferno
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

  //constrain the biker (user) to be on the streets and not on the buildings (which could be cool but somewhat unrealistic)
  constrainOnHorizontalStreet() {

    //if userX is on the horizontal street, constrain it between the lower and upper leftBlocks
    if (this.userX < this.leftBlocksX || this.userX > this.rightBlocksX) {
      this.userY = constrain(this.userY, this.upperBlocksY, this.lowerBlocksY);
    }
    //Otherwise, user is constrain to the width of the map
    else {
      this.userX = constrain(this.userX, 0, width)
    }
  }

  constrainOnVerticalStreet() {
    //if userY is under the lower blocks or over the upper blocks, user is constrain to the vertical street
    if (this.userY > this.lowerBlocksY || this.userY < this.upperBlocksY) {
      this.userX = constrain(this.userX, this.leftBlocksX, this.rightBlocksX)
    } //Otherwise, user is constrain to the width of the map
    else {
      this.userX = constrain(this.userX, 0, width)
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