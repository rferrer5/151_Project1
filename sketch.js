let x = 0;
let y = 50;
let speedX = 30;
let speedY = 3;
let angle = 0.0;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(100,100,100);

  fill(20,30,100);
  rect(x,100,100,100);

  fill(0,0,255);
  ellipse(300,y,100,100);

  if (second() % 2 == 0) {
	angle = angle + 1.0;
  }

  fill (255,0,0);
  rect(50,250,100,100);
  
  if (x + 100 > width) {
  	speedX = (-1*speedX);
  }

  if (y + 50 > height) {
	speedY = (-1*speedY);
  }

  x = x + speedX;
  y = y + speedY;  

  if (x == 0) {
	speedX = (-1*speedX);
  }

  if (y == 50) {
	speedY = (-1*speedY);
  }
}