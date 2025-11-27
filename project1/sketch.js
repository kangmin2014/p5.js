function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  noStroke();
} 

function draw() {
  background(50, 30, 30);

  fill(200, 80, 90);
  ellipse(300, 200, 80, 80);

  push();
  translate(300, 200);
  fill(120, 70, 90);
  rectMode(CENTER);
  rect(0, 0, 150, 40);
  pop();

  fill(300, 90, 90);
  beginShape();
  vertex(420, 330);
  vertex(450, 270);
  vertex(480, 330);
  endShape(CLOSE);

  for (let i = 0; i < 10; i++) {
    let ang = i * 0.6;
    let r = 140;
    let sx = 300 + cos(ang) * r;
    let sy = 200 + sin(ang) * r;
    fill((i * 30) % 360, 80, 100);
    ellipse(sx, sy, 18, 18);
  }

  noLoop();
}
