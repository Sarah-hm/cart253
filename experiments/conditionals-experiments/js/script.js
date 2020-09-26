let caterpillar = {
  x: 250,
  y: 250,
  segmentSize: 300,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(100, 200, 100);

  // WHILE loop example
  // let x = caterpillar.x;
  // let numSegments = 50;
  // let segmentsDrawn = 0;
  //
  // while (segmentsDrawn < numSegments) {
  //   ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //   x += 7;
  //   segmentsDrawn++;
  // }

  //FOR loop example
  //   let x = caterpillar.x;
  //   let numSegments = 10;
  //   let segmentsDrawn = 0;
  // ``
  //   for (let i = 0; i < numSegments; i++) {
  //     ellipse(x, caterpillar.y, caterpillar.segmentSize);
  //     x += 40;
  //   }

  for (let size = caterpillar.segmentSize; size > 0; size--) {
    let currentfill = map(size, 0, caterpillar.segmentSize, 255, 0);
    fill(currentfill);
    ellipse(caterpillar.x, caterpillar.y, caterpillar.segmentSize);
  }
}
