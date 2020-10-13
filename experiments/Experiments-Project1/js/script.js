"use strict";
let trashImg = undefined;

function preload() {
  trashImg = loadImage("assets/images/star.png");
}
// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100,
};

// First trash object
let trash1 = {
  x: 250,
  y: 300,
  size: 50,
  picked: false, // We want to track whether the user has picked the trash
};

// Second trash object
let trash2 = {
  x: 350,
  y: 300,
  size: 50,
  picked: false,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  //set trash starting point
  trash1.x = random(0, width);
  trash1.y = random(0, height);
}

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has picked trash
  checktrash(trash1);
  checktrash(trash2);

  // Display the user and trashs
  displayUser();
  displayTrash(trash1);
  displayTrash(trash2);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the trash1 object and eats it if so
function checktrash(trash) {
  // We only want to check for an overlap if trash1 hasn't been picked yet
  if (!trash.picked) {
    let d = dist(user.x, user.y, trash.x, trash.y);
    if (d < user.size / 2 + trash.size / 2) {
      trash.picked = true;
    }
  }
}

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}
// Display the trash provided as a parameter
function displayTrash(trash) {
  // Check if the trash is still available to be picked
  if (!trash.picked) {
    // Display the trash as its position and with its size
    push();
    image(trashImg, trash.x, trash.y, trash.size, trash.size);
    pop();
  }
}
