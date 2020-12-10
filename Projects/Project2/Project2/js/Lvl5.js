class Lvl5 extends State {
  constructor() {
    super();

    //=== variables for background, music, contrains ===
    this.startBgImg = lvl5startBgImg;
    this.playingBgImg = lvl5bgImg;
    this.ambianceSound = lvl5AmbianceSounds;
    this.soundPlaying = false;

    //set x , y variables to constrain user to be on the street (and not on the house blocks)
    this.leftBlocksX = 191;
    this.rightBlocksX = width - 191;

    this.upperBlocksY = 229;
    this.lowerBlocksY = height - 209;


    //===Set variables for user===
    this.userX = width / 2;
    this.userY = height - 10;
    //width and height of user and 'bike'
    this.width = 30
    this.height = 10
    //movement of user and 'bike'
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.maxSpeed = 3;
    this.angle = 0;
    this.turnMax = 0.08;

    //color of user
    this.fill = {
      r: 255,
      g: 255,
      b: 255
    }

    // === Variables for obstacles ===

    this.demonstrationImg = lvl5DemonstrationImg
    this.demonstrationX = width / 2 - 70;
    this.demonstrationY = 0;
    this.demonstrationWidth = 134;
    this.demonstrationHeight = 80;
    this.demonstrationVx = 0;
    this.demonstrationVy = 1.5;
    this.demonstrationSound = lvl5CrowdSounds;


  }

  update() {
    //setting level assets
    this.setBackground();
    // this.setAmbianceSound();

    //setting user
    this.steer();
    this.constrainOnHorizontalStreet();
    this.move();
    this.displayUser()

    //setting obstacles
    this.demonstration();

    //check if impact
    this.checkForImpact();
    this.checkForWin();
    this.success();
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

  //Set the city ambiance sounds to play on a loop
  setAmbianceSound() {
    if (!this.ambianceSound.isPlaying()) {
      this.ambianceSound.play()
    }
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
    //if userY is under the lower blocks or over the upper blocks, user is constrain to the vertical street
    else if (this.userY > this.lowerBlocksY || this.userY < this.upperBlocksY) {
      this.userX = constrain(this.userX, this.leftBlocksX, this.rightBlocksX)
      // console.log(this.userY)

    } //Otherwise, user is constrain to the width of the map
    else {
      this.userX = constrain(this.userX, 0, width)
    }

  }

  move() {
    this.vx = this.speed * cos(this.angle);
    this.vy = this.speed * sin(this.angle);

    this.userX += this.vx;
    this.userY += this.vy;
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

  demonstration() {
    //set demonstration in motion
    this.demonstrationX += this.demonstrationVx;
    this.demonstrationY += this.demonstrationVy

    //display demonstration
    push()
    image(this.demonstrationImg, this.demonstrationX, this.demonstrationY, this.demonstrationWidth, this.demonstrationHeight)
    pop()

    //set the demonstration to go back and forth once they hit the canvas's limit
    if (this.demonstrationY >= height || this.demonstrationY <= 0) {
      this.demonstrationVy = -this.demonstrationVy;
    }
  }

  checkForImpact() {
    // let d = int(dist(this.userX, this.userY, this.demonstrationX, this.demonstrationY))
    // if (d < )


    if (this.userX > this.demonstrationX - this.demonstrationWidth / 2 &&
      this.userX < this.demonstrationX + this.demonstrationWidth / 2 &&
      this.userY > this.demonstrationY - this.demonstrationHeight / 2 &&
      this.userY < this.demonstrationY + this.demonstrationHeight / 2 &&
      !this.demonstrationSound.isPlaying()) {
      this.demonstrationSound.play();
    }
  }

  checkForWin() {
    if (this.userY <= 0) {
      console.log(this.userY)
      this.lvlWon = true;
      this.successFrameStart = frameCount;
    } else {
      this.lvlWon = false;
    }
  }


  success() {
    if (this.lvlWon) {
      push();
      this.setBackground();
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
        currentState = new Lvl6
      }
    }
  }
}