class Life {
  constructor(x, y) {
    //position
    this.x = x;
    this.y = y

    //the image
    this.img = lifeImg;
    this.size = 50;


  }

  update() {
    this.display()
  }

  display() {

    for (let i = 0; i < lives.length; i++) {
      push()
      image(this.img, this.x, this.y, this.size, this.size)
      pop();
    }
  }

}