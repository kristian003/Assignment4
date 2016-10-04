var topBoundary = 0;
var bottomBoundary = 0;
var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;
var buttonSize = 100;
var colorCounter = 0


var brushColor = "black";
var brushSize = 10;
var currentArea = "";
var colorArray = ["black", "red", "green", "blue", "orange", "purple"];
var currentColor = "black";

function setup() {
  createCanvas(400, 500);
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;
  topBoundary = 400;
  bottomBoundary = height;


}


function draw() {
  fill("blue")
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("green");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("red");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("yellow");
  rect(boundary3, topBoundary, buttonSize, buttonSize);

  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    // console.log("color pricker area");
    if (mouseX > boundary0 && mouseX < boundary1) {
      console.log("area0")
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      console.log("area1")
      currentArea = "area1";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      console.log("area2")
      currentArea = "area2";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      console.log("area3")
      currentArea = "area3";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  if (currentArea == "area0") {
    brushColor = colorArray[colorCounter++];
    if (colorCounter >= colorArray.length) {
      colorCounter = 0;
    }
  } else if (currentArea == "area1") {
    brushColor = random(colorArray);
  } else if (currentArea == "area2") {
    brushSize++;
  } else if (currentArea == "area3") {
    brushSize--;
    if (brushSize < 10) {
      brushSize = 10;
    }
  
}
}