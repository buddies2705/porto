function setup() {
  createCanvas(windowWidth, windowHeight);
  background('white');
}

function draw() {
c = color(random(1000), random(1000), random(1000));  
  if (mouseIsPressed) {
  	 fill(c);
    ellipse(mouseX, mouseY, 50, 50);

  } else {
  	noFill();
  }

}