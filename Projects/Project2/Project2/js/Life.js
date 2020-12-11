//'tis the Life Class, displaying pixelated hearts (5) in an array positioned at the left bottom corner of the screen.
class Life {
  constructor(x, y) {
    //position
    this.x = x;
    this.y = y;

    //the image
    this.img = lifeImg;
    this.size = 50;


  }

  update() {
    this.display()

  }

  display() {
    push()
    image(this.img, this.x, this.y, this.size, this.size)
    pop();

  }


}