class Lvl5 extends State {
  constructor() {
    super();

    //This level instruction and #lvl strings
    this.numLvlString = '#5'
    this.numLvlStringX = width / 2 - 100
    this.numLvlStringY = height / 2 - 90
    this.insString = `You better
get to work
on time.`
    this.insStringX = width / 2 - 55
    this.insStringY = height / 2 - 50


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
    this.width = 30;
    this.height = 10;
    //movement of user and 'bike'
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    this.maxSpeed = 2;
    this.angle = 0;
    this.turnMax = 0.08;
    //color of user
    this.fill = {
      r: 255,
      g: 255,
      b: 255,
    };

    // === Variables for obstacles ===
    //Vertical descending demonstration
    this.demonstrationImg = lvl5DemonstrationImg;
    this.demonstrationX = width / 2;
    this.demonstrationY = 0;
    this.demonstrationWidth = 134;
    this.demonstrationHeight = 80;
    this.demonstrationVeer = 0.1
    this.demonstrationVx = 0;
    this.demonstrationVy = 1.5;
    this.demonstrationSound = lvl5CrowdSounds;
    this.demonstrationVolume = 0.5;
    this.demonstrationMaxVolume = 1;
    this.demonstrationMinVolume = 0;


    //Driver driving on horizontal street from left to right
    //Bottom driver starts at the left side
    this.driverBottomImg = lvl5DriverTowardsRightImg;
    this.driverBottomX = 0;
    this.driverBottomY = height / 2 + 40;
    this.driverBottomWidth = 98;
    this.driverBottomHeight = 84;
    this.driverBottomvx = 3;
    this.driverBottomvy = 0;

    // top driver starts at the right side
    this.driverTopImg = lvl5DriverTowardsLeftImg;
    this.driverTopX = width;
    this.driverTopY = height / 2 - 40;
    this.driverTopWidth = 98;
    this.driverTopHeight = 84;
    this.driverTopvx = -3;
    this.driverTopvy = 0;

    // Both cars will have the same honk sound
    this.honkSound = lvl5HonkSound;

    //success Variables
    this.bossImg = lvl5BossImg;
    this.bossImgX = width / 5 * 3;
    this.bossImgY = height;
    this.bossImgWidth = 349;
    this.bossImgHeight = 464;
  }

  //Contain all functions that should loop during the entire level
  update() {
    //setting level assets
    this.setBackground();
    this.setAmbianceSound();

    //setting user
    this.steer();
    this.constrainOnStreet();
    this.move();
    this.displayUser();

    //setting obstacles
    this.demonstration();
    this.driverTop();
    this.driverBottom();

    //check if impact
    this.checkForImpactWithUser();
    this.checkDemonstrationDistance();
    this.checkForImpactWithObstacles();
    this.checkForWin();
    this.success();

  }

  //Set the background and trigger setString method if user has not moved yet
  setBackground() {
    if (this.userX === width / 2 && this.userY === height - 10) {
      push();
      imageMode(CORNER);
      image(this.startBgImg, width, height);
      background(this.startBgImg);
      this.setStrings();
      pop();
    } else {
      push();
      imageMode(CORNER);
      image(this.playingBgImg, width, height);
      background(this.playingBgImg);
      pop();
    }
  }

  //Set instruction strings on top of everything only if the user hasn't moved yet;
  setStrings() {
    push();
    textAlign(LEFT, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, this.numLvlStringX, this.numLvlStringY);
    text(this.insString, this.insStringX, this.insStringY)

    pop();

  }

  //Set the city ambiance sounds to play on a loop
  setAmbianceSound() {
    if (!this.ambianceSound.isPlaying()) {
      this.ambianceSound.play();
    }
  }

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
  constrainOnStreet() {
    //if userX is on the horizontal street, constrain it between the lower and upper leftBlocks
    if (this.userY > this.lowerBlocksY || this.userY < this.upperBlocksY) {
      this.userX = constrain(
        this.userX,
        this.leftBlocksX + 10,
        this.rightBlocksX - 10
      );
    }
    //if userY is under the lower blocks or over the upper blocks, user is constrain to the vertical street
    else if (this.userX < this.leftBlocksX || this.userX > this.rightBlocksX) {
      this.userY = constrain(
        this.userY,
        this.upperBlocksY + 10,
        this.lowerBlocksY - 10
      );
    }
    //Otherwise, user is constrain to the width of the map
    else {
      this.userX = constrain(this.userX, 0, width);
    }
  }

  //Make the user move with polar coordinates
  //ATTRIBUTION: This is from Pippin Barr's traffic inferno:
  move() {
    this.vx = this.speed * cos(this.angle);
    this.vy = this.speed * sin(this.angle);

    this.userX += this.vx;
    this.userY += this.vy;
  }

  //Display user as a white rectangle (this is a bike. Use your imagination.)
  displayUser() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    translate(this.userX, this.userY);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }

  //display the demonstration (img), make it move from top to bottom, and then bottom to top when it hits the limits of the canvas
  demonstration() {
    //constrain demonstration to the vertical street;
    this.demonstrationX = constrain(
      this.demonstrationX,
      this.leftBlocksX,
      this.rightBlocksX
    );
    //set demonstration in motion
    // ATTRIBUTIONS : Veering code was taken from Pippin Barr's overriding methods notes
    let r = random();
    if (r < this.demonstrationVeer) {
      this.demonstrationVx = random(-6, 6)
    }
    this.demonstrationX += this.demonstrationVx;
    this.demonstrationY += this.demonstrationVy;
    //display demonstration
    push();
    image(
      this.demonstrationImg,
      this.demonstrationX,
      this.demonstrationY,
      this.demonstrationWidth,
      this.demonstrationHeight
    );
    pop();
    //set the demonstration to go back and forth once they hit the canvas's limit
    if (this.demonstrationY >= height || this.demonstrationY <= 0) {
      this.demonstrationVy = -this.demonstrationVy;
    }
  }

  // upper driver : set movement, direction(and img) and display it
  driverTop() {
    //set car in motion
    this.driverTopX += this.driverTopvx;
    this.driverTopY += this.driverTopvy;
    //Make the car change direction if it hits canvas' limits
    if (this.driverTopX > width) {
      this.driverTopvx = -this.driverTopvx;
      this.driverTopImg = lvl5DriverTowardsLeftImg;
    } else if (this.driverTopX < 0) {
      this.driverTopvx = -this.driverTopvx;
      this.driverTopImg = lvl5DriverTowardsRightImg;
    }
    //display car
    push();
    image(
      this.driverTopImg,
      this.driverTopX,
      this.driverTopY,
      this.driverTopWidth,
      this.driverTopHeight
    );
    pop();

  }

  // lower driver : set movement, direction(and img) and display it
  driverBottom() {
    //set car in motion
    this.driverBottomX += this.driverBottomvx;
    this.driverBottomY += this.driverBottomvy;
    //Make the car change direction if it hits canvas' limits
    if (this.driverBottomX > width) {
      this.driverBottomvx = -this.driverBottomvx;
      this.driverBottomImg = lvl5DriverTowardsLeftImg;
    } else if (this.driverBottomX < 0) {
      this.driverBottomvx = -this.driverBottomvx;
      this.driverBottomImg = lvl5DriverTowardsRightImg;
    }
    //display car
    push();
    image(
      this.driverBottomImg,
      this.driverBottomX,
      this.driverBottomY,
      this.driverBottomWidth,
      this.driverBottomHeight
    );
    pop();

  }

  //Check to see how far demonstration is and make its sound play louder if closer, lower if farther
  checkDemonstrationDistance() {
    // Set distance between user and demonstration, map that distance to convert it to the demonstration sound volume
    let d = int(
      dist(this.userX, this.userY, this.demonstrationX, this.demonstrationY)
    );
    this.demonstrationVolume = map(d, 500, 0, 0, 0.8);

    // Set volume of demonstration sound
    this.demonstrationSound.setVolume(this.demonstrationVolume);

    // Make the demonstration sound play in a loop
    if (!this.demonstrationSound.isPlaying()) {
      this.demonstrationSound.play();
    }
  }

  // Check to see if user hit either cars (both) or the demonstration, resulting in a fail (-1 life)
  checkForImpactWithUser() {
    //Impact with demonstration will result in fail (-1 life)
    if (
      this.userX > this.demonstrationX - this.demonstrationWidth / 2 &&
      this.userX < this.demonstrationX + this.demonstrationWidth / 2 &&
      this.userY > this.demonstrationY - this.demonstrationHeight / 2 &&
      this.userY < this.demonstrationY + this.demonstrationHeight / 2 &&
      !fartSFX.isPlaying()
    ) {
      this.fail();
    }
    //Impact with car (bottom) will result in honking and fail (-1 life)
    if (
      this.userX > this.driverBottomX - this.driverBottomWidth / 2 &&
      this.userX < this.driverBottomX + this.driverBottomWidth / 2 &&
      this.userY > this.driverBottomY - this.driverBottomHeight / 2 &&
      this.userY < this.driverBottomY + this.driverBottomHeight / 2 &&
      !this.honkSound.isPlaying()
    ) {
      this.honkSound.play();
      this.fail();
    }
    //Impact with car (top) will result in honking and fail (-1 life)
    if (
      this.userX > this.driverTopX - this.driverTopWidth / 2 &&
      this.userX < this.driverTopX + this.driverTopWidth / 2 &&
      this.userY > this.driverTopY - this.driverTopHeight / 2 &&
      this.userY < this.driverTopY + this.driverTopHeight / 2 &&
      !this.honkSound.isPlaying()
    ) {
      this.honkSound.play();
      this.fail();
    }
  }


  //Make the cars stop if the demonstration is passing. Y'know. To not kill people. But they're not stopping for you. Nay-nay
  checkForImpactWithObstacles() {
    //set distance variable from bottom car to demonstration
    let dDriverBottom = int(
      dist(
        this.demonstrationX,
        this.demonstrationY,
        this.driverBottomX,
        this.driverBottomY
      )
    );
    //if demonstration collides with car (bottom), car stops and honks (if honk not already playing)
    if (
      dDriverBottom < this.demonstrationWidth / 2 + this.driverBottomWidth / 2 ||
      dDriverBottom < this.demonstrationHeight / 2 + this.driverBottomHeight / 2
    ) {
      this.driverBottomvx = 0;
      this.driverBottomvy = 0;
      if (!this.honkSound.isPlaying()) {
        this.honkSound.play();
      }
    }
    //If car (bottom) is not colliding, will continue to go in whichever direction it was already going (based on the image's description)
    else {
      if (this.driverBottomImg === lvl5DriverTowardsRightImg) {
        this.driverBottomvx = 5;
      } else {
        this.driverBottomvx = -5;
      }
    }

    //Same but with top car
    //Set distance variable from top car to demonstration
    let dDriverTop = int(
      dist(
        this.demonstrationX,
        this.demonstrationY,
        this.driverTopX,
        this.driverTopY
      )
    );
    //if demonstration collides with car (top), car stops and honks (if honk not already playing)
    if (
      dDriverTop < this.demonstrationWidth / 2 + this.driverTopWidth / 2 ||
      dDriverTop < this.demonstrationHeight / 2 + this.driverTopHeight / 2
    ) {
      this.driverTopvx = 0;
      this.driverTopvy = 0;
      if (!this.honkSound.isPlaying()) {
        this.honkSound.play();
      }
    }
    //If car (bottom) is not colliding, will continue to go in whichever direction it was already going (based on the image's description)
    else {
      if (this.driverTopImg === lvl5DriverTowardsRightImg) {
        this.driverTopvx = 4;
      } else {
        this.driverTopvx = -4;
      }
    }
  }

  // If the user has reached the top of the canvas, they win! (But they're at work now, so do they really?)
  checkForWin() {
    if (this.userY <= 0) {
      this.lvlWon = true;
      this.successFrameStart = frameCount;
    }
  }

  //A success string will appear and you'll be able to get to the next level after a set amount of seconds.
  success() {
    if (this.lvlWon) {
      push();
      this.playWinSFX();
      fill(239, 122, 98);
      noStroke();
      rect(width / 2, height / 2, 400, 200);
      textSize(25);
      fill(0);
      textAlign(CENTER, CENTER);
      text(
        `Well...
    You could have still be there
    early. It's like you don't
    even care about this company?`,
        width / 2,
        height / 2
      );
      image(this.bossImg, this.bossImgX, this.bossImgY, this.bossImgWidth, this.bossImgHeight)
      pop();

      if (mouseIsPressed) {
        currentState = new WinGame
      }
    }
  }
}