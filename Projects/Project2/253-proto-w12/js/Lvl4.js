class Lvl4 extends State {
  constructor() {
    super();

    this.numLvlString = '#3'
    this.insString = `You feel lonely.
    What do you get?`

    //set background colour
    this.bgFill = {
      r: 240,
      g: 175,
      b: 178,
    }

    //The baby
    this.babyNeutralImg = lvl4babyNeutralImg;
    this.babyhoverImg = lvl4babyHoverImg;
    this.babyX = width / 3;

    //The plant
    this.plantNeutralImg = lvl4plantNeutralImg;
    this.plantHoverImg = lvl4plantHoverImg;
    this.plantX = width / 2;

    //The cat
    this.catNeutralImg = lvl4catNeutralImg;
    this.catHoverImg = lvl4catHoverImg;
    this.catX = width / 3 * 2

    //All assets have a universal Y position (in the middle)
    this.y = height / 2;

    this.sizeX = 200;
    this.sizeY = 253;
    this.scale = 0.5;
  }

  update() {
    this.setBackground()
    this.displayAssets()
    this.setStrings()
  }

  setBackground() {
    background(this.bgFill.r, this.bgFill.g, this.bgFill.b)
  }

  displayAssets() {
    //candycane
    if (mouseX > this.candycaneX - this.size / 2 &&
      mouseX < this.candycaneX + this.size / 2 &&
      mouseY > this.y - this.size / 2 &&
      mouseY < this.y + this.size / 2) {
      push()
      image(this.candycaneHoverImg, this.candycaneX, this.y, this.sizeX, this.sizeY)
      pop()
    } else {
      push()
      image(this.candycaneNeutralImg, this.candycaneX, this.y, this.sizeX, this.sizeY)
      pop()
    }

    //snowflake;
    if (mouseX > this.snowflakeX - this.size / 2 &&
      mouseX < this.snowflakeX + this.size / 2 &&
      mouseY > this.y - this.size / 2 &&
      mouseY < this.y + this.size / 2) {
      push()
      image(this.snowflakeHoverImg, this.snowflakeX, this.y, this.sizeX, this.sizeY)
      pop()
    } else {
      push()
      image(this.snowflakeNeutralImg, this.snowflakeX, this.y, this.sizeX, this.sizeY)
      pop()
    }

    //snowglobe;
    if (mouseX > this.snowglobeX - this.size / 2 &&
      mouseX < this.snowglobeX + this.size / 2 &&
      mouseY > this.y - this.size / 2 &&
      mouseY < this.y + this.size / 2) {
      push()
      image(this.snowglobeHoverImg, this.snowglobeX, this.y, this.sizeX, this.sizeY)
      pop()
    } else {
      push()
      image(this.snowglobeNeutralImg, this.snowglobeX, this.y, this.sizeX, this.sizeY)
      pop()
    }
  }

  setStrings() {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(this.numLvlString, width / 10, height / 20);
    text(this.insString, width / 5 * 2, height / 10)
  }

  mousePressed() {

  }
}