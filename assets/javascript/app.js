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


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}



var myTimer = setInterval(masterTimer, 10000);

// 30 second timer
var cnt = 0;
function masterTimer( ){
  var secStart = 10;
  $("#timer").text(secStart + " round " + (cnt + 1));
  var secCounter = setInterval(timer , 1000);
  function timer() {
    secStart -= 1;
    if (secStart <= -0) {
      secStart = 10;
      clearInterval(secCounter);
      return;
    }
    $("#timer").text(secStart + " round " + cnt);
  }
  cnt += 1;
  console.log(cnt);
  if (cnt === 4) {
    secStart = 0;
    console.log(cnt);
    $("#timer").text("0 " + " round " + cnt);
    clearInterval(myTimer);
  }
}

function myFunction() {
  var coffee = document.forms[1];
  var txt = "";
  var i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + " ";
    }
  }
  document.getElementById("coffee-order").value = "You ordered a coffee with: " + txt;
}

function myNextFunction() {
  var sandwich = document.forms[2];
  var txt = "";
  var i;
  for (i = 0; i < sandwich.length; i++) {
    if (sandwich[i].checked) {
      txt = txt + sandwich[i].value + " ";
    }
  }
  document.getElementById("sandwich-order").value = "You ordered a " + txt + "sandwich";
}

 