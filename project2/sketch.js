function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  background(210, 235, 255);

  let headX = width / 2;
  let headY = height / 2 + 40;
  let angle = 0;

  push();
  translate(headX, headY);
  rotate(angle);

  noStroke();
  fill(255, 230, 200);
  rect(-15, -10, 30, 30, 10);

  fill(100, 140, 250);
  beginShape();
  vertex(-70, 20);
  bezierVertex(-40, -20, 40, -20, 70, 20);
  vertex(70, 70);
  vertex(-70, 70);
  endShape(CLOSE);

  fill(255, 235, 210);
  ellipse(0, -60, 110, 130);

  fill(40, 30, 20);
  beginShape();
  vertex(-55, -95);
  bezierVertex(-70, -130, 0, -145, 70, -100);
  bezierVertex(80, -85, 55, -70, 40, -65);
  bezierVertex(10, -80, -10, -80, -40, -65);
  bezierVertex(-55, -70, -75, -85, -55, -95);
  endShape(CLOSE);

  fill(255);
  ellipse(-20, -65, 20, 12);
  ellipse(20, -65, 20, 12);
  fill(0);
  ellipse(-20, -65, 6, 6);
  ellipse(20, -65, 6, 6);

  stroke(40);
  strokeWeight(3);
  noFill();
  line(-30, -85, -10, -87);
  line(10, -87, 30, -85);

  noStroke();
  fill(120, 50, 50);
  rect(-15, -45, 30, 3, 2);

  pop();
}

