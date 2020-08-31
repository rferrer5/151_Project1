let x = 450;
let speed = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 100, 180);
}

function draw() {
  ellipse(x, mouseY, mouseY / 2 + 10, mouseY / 2 + 10);
  stroke(22);

  if (x + 50 > width || x < 50) {
    speed = -1 * speed;
  }
  x = x + speed;

  if (mouseIsPressed) {
    var r = Math.random() * 255 + 1;
    var g = Math.random() * 255 + 1;
    var b = Math.random() * 255 + 1;
    fill(r, g, b);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('image/myCanvas', 'png');
  }
}