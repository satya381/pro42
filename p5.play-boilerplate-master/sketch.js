function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();
}

function draw() {
  background(255,255,255); 
  hrAngle = map(hr , 0,60,360,60) ;
  scAngle = map(sc , 0,60,360,60) ;
  mnAngle = map(mn , 0,60,360,60) ;

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop(); 

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  drawSprites();
}