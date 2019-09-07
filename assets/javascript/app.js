//-----------------------
// set global variables
//-----------------------

// playGame is set to true when game initialzed; set to false
// set to false to keep player from adding points until game starts
var playGame = false;

// test function for button
function startFunction() {
    $("#testCol").text("Shake it Up");
    console.log("Lookee here!");
}

function draw() {
  $("#testCol").text("First Draw");
  setInterval(reDraw, 5000);
}

function reDraw() {
  $("#testCol").text("Second Draw");
}
// draw two sets of text
setInterval(draw, 5000);


// change color every 300 ms
var myVar = setInterval(setColor, 3000);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

// 30 second timer

var secStart = 30;
var secCounter = setInterval(timer , 1000);
function timer() {
  secStart -= 1;
  if (secStart <= 0) {
    clearInterval(secCounter);
    return;
  }
  $("#timer").text(secStart);
}
for (var i = 0; i < 5; i++) {
  timer();
}
$("#timer").text(secStart + "_" +secCounter);


 