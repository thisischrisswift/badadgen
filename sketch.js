// Image Classification with MobileNet
// A Beginner's Guide to Machine Learning with ml5.js
// The Coding Train / Daniel Shiffman
// https://youtu.be/yNkAuWz5lnY
// https://thecodingtrain.com/learning/ml5/1.1-image-classification.html
// https://editor.p5js.org/codingtrain/sketches/qFZF7iDe

let mobilenet;
let picture;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  // font = loadFont("DomaineDisplayNarrow-Regular.otf");
  // picture = createImg('https://source.unsplash.com/random', imageReady);
  picture = createImg('https://picsum.photos/600/848', imageReady);
}

function modelReady() {
  console.log('Model is ready!!!');
  mobilenet.predict(picture, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    text("404 Cannot Not Purchase for Person");
    stop();
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    // console.log(results);
    angleMode(DEGREES)
    let minSizeW = 13 / textWidth(label) * (width / 1.2);
    let minSizeH = 13 / textWidth(label) * height;

    //poster header
    textAlign(CENTER);
    textSize(100);
    text("hi person, buy this", width/2, 110);
    

    //top
    textSize(minSizeW);
    text(label, width/2, height/2 + (minSizeW/2));

    // //bottom
    // push();
    // translate(width / 2, height / 2);
    // rotate(180);
    // textSize(minSizeW);
    // text(label, -width / 2, -height / 2 + minSizeW);
    // pop();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // textFont(font);
  stroke(0, 255, 0);
  strokeWeight(2);
  noFill();
  imageMode(CENTER);
}

function draw() {
  picture.hide();
  background(255);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
  noLoop();
}

function imageReady() {
  image(picture, width / 2, height / 2);
}