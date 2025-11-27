let t = 0;  // 시간 

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);  
  noStroke();
}

function draw() {
  let bg = (t * 10) % 360;
  background(bg, 30, 30);

  
  let x1 = 300 + sin(t) * 100;
  let y1 = 200 + cos(t) * 80;
  let s1 = 80 + sin(t * 2) * 20;
  let c1 = color((t * 40) % 360, 80, 90);
  fill(c1);
  ellipse(x1, y1, s1, s1);

  
  push();
  translate(300, 200);
  rotate(t);
  let c2 = color((t * 25) % 360, 70, 90);
  fill(c2);
  rectMode(CENTER);
  rect(0, 0, 150, 40);
  pop();

 
  let y2 = 300 + sin(t * 1.5) * 50;
  let s2 = 60 + cos(t * 1.7) * 20;
  let c3 = color((t * 50) % 360, 90, 90);
  fill(c3);
  beginShape();
  vertex(450 - s2 / 2, y2 + s2 / 2);
  vertex(450, y2 - s2 / 2);
  vertex(450 + s2 / 2, y2 + s2 / 2);
  endShape(CLOSE);

 
  for (let i = 0; i < 10; i++) {
    let ang = i * 0.6 + t * 0.3;
    let r = 140 + sin(t + i) * 20;
    let sx = 300 + cos(ang) * r;
    let sy = 200 + sin(ang) * r;
    let cc = color((i * 30 + t * 20) % 360, 80, 100);
    fill(cc);
    ellipse(sx, sy, 18, 18);
  }

  
  t += 0.02;
}
