let speed = 5; //speed of the shape

let circles = []; //array of circles
let i = 0; //the index of the array
let colors = []; //color palette
var c;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  ellipseMode(RADIUS);
  colors =[color("#2b303a"),color("#92dce5"),color("#eee5e9"),color("#7c7c7c"),color("#d64933")]; 
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
    circles[i] = new Circle(mouseX, mouseY, random(1,50));
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
    this.coloring = 255;
  }

  //moves the circle
  move() {
    this.xpos = this.xpos + speed * this.xdirection;
    this.ypos = this.ypos + speed * this.ydirection;

    //these conditionals check if the circles position is at border
    if (this.xpos > width - this.rad || this.xpos < this.rad) {
      this.xdirection *= -1;
      this.coloring = colors[int(random(0, colors.length))];
    }
    if (this.ypos > height - this.rad || this.ypos < this.rad) {
      this.ydirection *= -1;
      this.coloring = colors[int(random(0, colors.length))];  
    }
  }

  //draws the circle
  display() {
    fill(this.coloring);
    ellipse(this.xpos, this.ypos, this.rad, this.rad);
  }
}

function keyPressed(){
   save(c, 'keyCanvas.jpg');
}