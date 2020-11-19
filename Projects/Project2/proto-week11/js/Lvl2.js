class Lvl2 {
  constructor({
    candycaneX,
    candycaneY,
    snowflakeX,
    snowflakeY,
    snowglobeX,
    snowglobeY,
    xmasBallX,
    xmasBallY
  }) {
    //set instruction and lvl number
    this.numLvlString = `#2`;
    this.insString = `Choose a christmas
    decoration that best suit you`

    //set background colour variables (very light green-ish blue)
    this.bgFill = {
      r: 205,
      g: 231,
      b: 227,
    }
    //Fix universal size because it's a lot easier (all assets are 200x200px)
    this.size = 200;

    // set all 4 assets' variables (x, y, neutral image, hover image)
    this.candycaneNeutralImg = candycaneNeutralImg;
    this.candycaneHoverImg = candycaneHoverImg;
    this.candycaneX = candycaneX;
    this.candycaneY = candycaneY;

    this.snowflakeNeutralImg = snowflakeNeutralImg;
    this.snowflakeHoverImg = snowflakeHoverImg;
    this.snowflakeX = snowflakeX;
    this.snowflakeY = snowflakeY;

    this.snowglobeNeutralImg = snowglobeNeutralImg;
    this.snowglobeHoverImg = snowglobeHoverImg;
    this.snowglobeX = snowglobeX;
    this.snowglobeY = snowglobeY;

    this.xmasBallNeutralImg = xmasBallNeutralImg;
    this.xmasBallHoverImg = xmasBallHoverImg;
    this.xmasBallX = xmasBallX;
    this.xmasBallY = xmasBallY
  }


  setbackground() {
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b)
  }

  displayAssets() {

    //candycane
    if (mouseX > this.candycaneX - this.size / 2 &&
      mouseX < this.candycaneX + this.size / 2 &&
      mouseY > this.candycaneY - this.size / 2 &&
      mouseY < this.candycaneY + this.size / 2) {
      push()
      image(this.candycaneHoverImg, this.candycaneX, this.candycaneY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.candycaneNeutralImg, this.candycaneX, this.candycaneY, this.size, this.size)
      pop()
    }

    //snowflake;
    if (mouseX > this.snowflakeX - this.size / 2 &&
      mouseX < this.snowflakeX + this.size / 2 &&
      mouseY > this.snowflakeY - this.size / 2 &&
      mouseY < this.snowflakeY + this.size / 2) {
      push()
      image(this.snowflakeHoverImg, this.snowflakeX, this.snowflakeY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.snowflakeNeutralImg, this.snowflakeX, this.snowflakeY, this.size, this.size)
      pop()
    }

    //snowglobe;
    if (mouseX > this.snowglobeX - this.size / 2 &&
      mouseX < this.snowglobeX + this.size / 2 &&
      mouseY > this.snowglobeY - this.size / 2 &&
      mouseY < this.snowglobeY + this.size / 2) {
      push()
      image(this.snowglobeHoverImg, this.snowglobeX, this.snowglobeY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.snowglobeNeutralImg, this.snowglobeX, this.snowglobeY, this.size, this.size)
      pop()
    }

    //xmasBall;
    if (mouseX > this.xmasBallX - this.size / 2 &&
      mouseX < this.xmasBallX + this.size / 2 &&
      mouseY > this.xmasBallY - this.size / 2 &&
      mouseY < this.xmasBallY + this.size / 2) {
      push()
      image(this.xmasBallHoverImg, this.xmasBallX, this.xmasBallY, this.size, this.size)
      pop()
    } else {
      push()
      image(this.xmasBallNeutralImg, this.xmasBallX, this.xmasBallY, this.size, this.size)
      pop()
    }
  }

  setStrings() {
    push();
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 10 * 4, height / 10)
    pop()
  }
}