class State {
  constructor() {


    //Set 'false' to suceess and
    //Set the minimum time one should be in the 'success' state of the level
    this.lvlWon = false;
    this.successFrameStart = 0;
    this.successMessageMinLength = 60;

    //set sounds
    this.failSFX = fartSFX;
    this.gameOverSFX = gameOverSFX;
    this.winSFX = partyHornSFX;

  }

  update() {

  }

  //If you still have 2+ lives left, one life (heart) will be substracted.
  //If you had one life left, it will disappear and you go to 'Game Over' page
  fail() {
    if (lives.length > 1) {
      this.failSFX.play();
      lives.pop()
    } else if (lives.length === 1) {
      lives.pop();
      this.gameOverSFX.play();
      currentState = new GameOver();
    }
  }

  playWinSFX() {
    if (!this.winSFX.isPlaying()) {
      this.winSFX.play();
    }
  }

  mousePressed() {

  }

  keyPressed() {

  }

  keyTyped() {

  }

}