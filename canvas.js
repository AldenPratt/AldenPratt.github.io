function setup() {

  var myCanvas = createCanvas(1000, 400);
    myCanvas.parent("wrap");
  noStroke();
  rectMode(CENTER);
  img1 = loadImage('firebending.png');
  img2 = loadImage('airbending.png');
}

function draw() {
  background(230);

  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  tint(255, r1);
  image(img1, width / 2 + r1 / 2, height / 2, r1, r1);

  tint(255, r2);
  image(img2, width / 2 - r2 / 2, height / 2, r2, r2);
}
