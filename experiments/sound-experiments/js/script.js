"use strict"

let stringArray = [
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
  "Level 5"
]
let index = 0;
let decimalIndex = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(255);
  rect(0, 0, width, mouseY); //white rectangle width follows mouseY
  fill(255, 0, 0);

  //we map the mouseY (who changes from 0 to height)
  //to the length of our stringArray (goes from 0 to 4)
  //So that we can obtain the index at which we should choose the string.

  //e.g. if mouseY is halfay in the canvas (1/2 of height),
  //we want to be halfway in our array (index of 2 (i.e halfway between 0 and 4))
  decimalIndex = map(mouseY, 0, height, 0, stringArray.length - 1);
  text("decimalIndex: " + decimalIndex, 0, height);

  //But you can see in the bottom left of the canvas that this
  //mapping gives a decimal number
  //We need to turn it into an integer, like this
  index = int(decimalIndex);
  //in the bottom right of the canvas, you can see the resulting intiger
  text("index: " + index, width - 60, height);

  //We then use that indext to select the appropriate string from our array
  text(stringArray[index], width / 2, height / 2);


}