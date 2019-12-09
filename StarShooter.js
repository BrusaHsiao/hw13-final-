function setup() {
  song = loadSound('411642__inspectorj__pop-high-a-h1.wav')
  createCanvas(400, 400);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    fill(179, width, height);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, 5, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(height, 135, width);
    line(px, py, sx, sy);

  }
}

var stars = [];
var speed;
var Blue = 150;
var ship = 0;
var bullet = 0;

function draw() {
  Blue = map(mouseY, 0, 600, 150, 0);

  background(0, 0, Blue);
  speed = map(100, 0, width, 0, 50);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  noStroke();
  
  fill(200, 0, 0)
  rect(-10 + ship, 150, 10, 50); //shooter


  ellipse(-5 + ship, 150 - bullet, 10); //bullet
  bullet = bullet + 2;
  if (bullet >= 399) {
    bullet = 0;
    song.play();
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship = ship + 10;
  } else if (keyCode === LEFT_ARROW) {
    ship = ship - 10;
  }
}

//credits to Daniel Shiffman's coding tutorial:
//https://www.youtube.com/watch?v=nicMAoW6u1g
