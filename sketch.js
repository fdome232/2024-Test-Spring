let h; //hour
let m; //minute
let s; //second
let mo; //month
let d; //day

let f = 255; //controls font color
let bg = 0; //controls bg color
let birthdaymessage = false; //my message control

function setup() {
 var canvas = createCanvas(400, 400);

 canvas.parent('project');
}

function draw() {
  background(bg);

  rectMode(CENTER);
  noFill();
  stroke(255); // Black border
  strokeWeight(2);
  rect(width / 2, height / 2 + 40, 205, 60);

  // Get the current time
  h = hour();
  m = minute();
  s = second();
  mo = month();
  d = day();

  // I need AM PM
  let ampm = h >= 12 ? "PM" : "AM";
  let hour12 = h % 12 || 12;

  // Display date
  noStroke();
  fill(f);
  textSize(64);
  textAlign(CENTER);
  text(mo + " " + d, width / 2, height / 2);

  // I need a 12 hour clock
  let formattedTime =
    nf(hour12, 2) + ":" + nf(m, 2) + ":" + nf(s, 2) + " " + ampm;

  textSize(32);
  text(formattedTime, width / 2, height / 2 + 50);

  // Check if it's April 27th
  showBirthdayMessage = (mo == 4 && d == 27) || mouseIsPressed;

  // Happy Birthday Message
  let birthdaymessageText = "Happy Birthday to ME!";

  if (showBirthdayMessage) {
    rectMode(CENTER);
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(width / 2, height / 2 + 40, 205, 60);

    f = 0;
    bg = 255;

    textSize(24);
    fill(random(255), random(255), random(255)); // random color
    text(birthdaymessageText, width / 2, height / 2 + 95);
  }
}
