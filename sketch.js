let x = 0;
let speed = 3;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(100,100,100);

  fill(20,30,100);
  rect(x,100,100,100);

  fill(0,0,255);
  ellipse(300,300,100,100);
  
  if (x + 100 > width) {
  	speed = (-1*speed);
  }

  x = x + speed;
}