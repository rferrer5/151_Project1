let speed = 5; //speed of the shape

let circles = []; //array of circles
let i = 0; //the index of the array

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  ellipseMode(RADIUS);
  circles[i] = new Circle(width / 2, height / 2, 25); //Always starts with 1 circle
  i++;
}

function draw() {
  //Continuous loop so our balls will continue moving
  circles.forEach(ball => {
    ball.move();
    ball.display();
  });

  //If mouse is clicked, a circle is created at where it was clicked
  if (mouseIsPressed) {
    circles[i] = new Circle(mouseX, mouseY, 25);
    i++;
  }
}

class Circle {
  
  constructor(xpos, ypos, rad) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.rad = rad;
    this.xdirection = random(-2,2);
    this.ydirection = random(-2,2);
    this.r = 255;
    this.g = 255;
    this.b = 255;
  }

  //moves the circle
  move() {
    this.xpos = this.xpos + speed * this.xdirection;
    this.ypos = this.ypos + speed * this.ydirection;

    //these conditionals check if the circles position is at border
    if (this.xpos > width - this.rad || this.xpos < this.rad) {
      this.xdirection *= -1;
      this.r = Math.random() * 255 + 1;
      this.g = Math.random() * 255 + 1;
      this.b = Math.random() * 255 + 1;
    }
    if (this.ypos > height - this.rad || this.ypos < this.rad) {
      this.ydirection *= -1;
      this.r = Math.random() * 255 + 1;
      this.g = Math.random() * 255 + 1;
      this.b = Math.random() * 255 + 1;   
    }
  }

  //draws the circle
  display() {
    fill(this.r, this.g, this.b);
    ellipse(this.xpos, this.ypos, this.rad, this.rad);
  }
}