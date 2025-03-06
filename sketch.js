//variables
let croakingAudio;
let riverAudio;
let frog;
let frogX;
let frogY;
let clickCount = 0;

function preload() {
  // stuff for sound effects and images
  croakingAudio = loadSound("croaking-frogs-67704.mp3");
  riverAudio = loadSound("shallow-river-28466.mp3");
  frog = loadImage("DES 427 - Frog Graphic.png");
}

function setup() {
  createCanvas(500, 500);
  frogX = 390;

//image of frog
frog = loadImage("DES 427 - Frog Graphic.png");

}

function draw() {
  background('rgb(31,96,209)');
  
  noStroke();
  
  fill('rgb(2,177,2)');
  circle(120, 250, 65);
  circle(350, 270, 75);
  circle(255, 210, 125);
  
  fill('rgb(252,182,6)');
  rect(400, 0, 500, 500);
  rect(0, 0, 50, 500);
  rect(0, 0, 75, 400);
  rect(350, 450, 175, 200);
  rect(350, 0, 175, 80);
  
  fill('rgba(113,170,220,0.68)');
  rect(330, 0, 5, 55);
  rect(100, 50, 5, 55);
  rect(150, 150, 5, 75);
  rect(250, 400, 6, 105);
  rect(300, 300, 3.5, 95);
  rect(110, 470, 4, 95);
  
  fill('rgb(31,96,209)');
  triangle(235, 135, 255, 205, 200, 145);
  triangle(345, 285, 285, 285, 295, 265);
  triangle(115, 235, 125, 185, 130, 215);

  image(frog, frogX, frogY, 175, 175);

}

function mousePressed() {
 //audio for background noise
  croakingAudio.loop();
  riverAudio.loop();

  // Frog jumping motions
  if (clickCount === 0) {
    frogX = 420;
    frogY = 170;
  } else if (clickCount === 1) {
    frogX = 300;
    frogY = 140;
  } else if (clickCount === 2) {
    frogX = 200;
    frogY = 110;
  } else if (clickCount === 3) {
    frogX = 50;
    frogY = 150;
  } else if (clickCount === 4) {
    frogX = -70;
    frogY = 160;
  }

  clickCount++;
}




