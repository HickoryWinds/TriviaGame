//-----------------------
// set global variables
//-----------------------

// playGame is set to true when game initialzed; set to false
// set to false to keep player from adding points until game starts
var playGame = false;

// test function for button
function startFunction() {
    window.location.href = "game_page.html";
    // console.log("Lookee here!");
}

// function draw() {
//   $("#testCol").text("First Draw");
//   setInterval(reDraw, 5000);
// }

// function reDraw() {
//   $("#testCol").text("Second Draw");
// }
// draw two sets of text
// setInterval(draw, 5000);


// change color every 300 ms
// var myVar = setInterval(setColor, 3000);
 
// function setColor() {
//   var x = document.body;
//   x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }


// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }



// var myTimer = setInterval(masterTimer, 10000);

// // 30 second timer
// var cnt = 0;
// function masterTimer( ){
//   var secStart = 10;
//   $("#timer").text(secStart + " round " + (cnt + 1));
//   var secCounter = setInterval(timer , 1000);
//   function timer() {
//     secStart -= 1;
//     if (secStart <= 0) {
//       secStart = 10;
//       clearInterval(secCounter);
//       return;
//     }
//     $("#timer").text(secStart + " round " + cnt);
//   }
//   cnt += 1;
//   // console.log(cnt);
//   if (cnt === 4) {
//     secStart = 0;
//     // console.log(cnt);
//     $("#timer").text("0 " + " round " + cnt);
//     clearInterval(myTimer);
//   }
// }
var secCounter;
// 30 second timer
var cnt = 0;
var secStart = 0;
function masterTimer( ){
  secStart = 10;
  secCounter = setInterval(timer , 1000);
  function timer() {
    secStart -= 1;
    if (secStart <= 0) {
      clearInterval(secCounter);
      // secStart = 0;
      calcScore();
      // return;
    }
    document.getElementById("timer").innerHTML = (secStart + " seconds left");
  }
  // cnt += 1;
  // console.log(cnt);
  // if (cnt === 4) {
  //   secStart = 0;
  //   // console.log(cnt);
  //   $("#timer").text("0 " + " round " + cnt);
  //   clearInterval(myTimer);
  // }
}

masterTimer();

var answerSummary = [];
console.log("answerSummary @ start = " + answerSummary)
var numberCorrect = 0;
var numberInCorrect = 0;
var numberNoAnswer = 0;

function answerOne() {
  var question1 = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      txt = txt + question1[i].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 1 = " + answerSummary);
    }
  }
  document.getElementById("pick-1").value = "Your answer to question one is " + txt;
}

function answerTwo() {
  var question2 = document.forms[1];
  var txt = "";
  var j;
  for (j = 0; j < question2.length; j++) {
    if (question2[j].checked) {
      txt = txt + question2[j].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 2 = " + answerSummary);
    }
  }
  document.getElementById("pick-2").value = "Your answer to question two is " + txt;
}

function answerThree() {
  var question3 = document.forms[2];
  var txt = "";
  var k;
  for (k = 0; k < question3.length; k++) {
    if (question3[k].checked) {
      txt = txt + question3[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 3 = " + answerSummary);
    }
  }
  document.getElementById("pick-3").value = "Your answer to question three is " + txt;
}

function calcScore() {
  secStart = 0;
  clearInterval(secCounter);
  document.getElementById("timer").innerHTML = ("0 seconds left");
  console.log("end " + secStart);
  answerOne();
  answerTwo();
  answerThree();
  if (answerSummary.length === 0) {
    answerSummary = ["a"];
  }
  for (var l = 0; l < answerSummary.length; l++) {
    console.log("l = " + l + " answerSummary{l} = " + answerSummary[l]);
    if (answerSummary[l] === "correct ") {
      numberCorrect++;
    }
    if (answerSummary[l] === "incorrect ") {
      numberInCorrect += 1;
    }
    numberNoAnswer = 3 - (numberCorrect + numberInCorrect);
  }
  // window.location.href = "score_page.html";
  console.log(numberCorrect);
  document.getElementById("right").innerHTML = numberCorrect;
  console.log(numberInCorrect);
  document.getElementById("wrong").innerHTML = numberInCorrect;
  console.log(numberNoAnswer);
  document.getElementById("none").innerHTML = numberNoAnswer;
  
  }

 