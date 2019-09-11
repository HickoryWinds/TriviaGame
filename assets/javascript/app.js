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

// define here so calcScore work when time runs out and with button
var secCounter;
// 30 second timer
var cnt = 0;
var secStart = 0;
function masterTimer( ){
  secStart = 60;
  secCounter = setInterval(timer , 1000);
  function timer() {
    secStart -= 1;
    if (secStart <= 0) {
      clearInterval(secCounter);
      // secStart = 0;
      calcScore();
      // return;
    }
    document.getElementById("timer").innerHTML = (secStart);
  }
}

var number_questions = 8;
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
  // document.getElementById("pick-1").value = "Your answer to question one is " + txt;
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
  // document.getElementById("pick-2").value = "Your answer to question two is " + txt;
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
  // document.getElementById("pick-3").value = "Your answer to question three is " + txt;
}
function answerFour() {
  var question4 = document.forms[3];
  var txt = "";
  var k;
  for (k = 0; k < question4.length; k++) {
    if (question4[k].checked) {
      txt = txt + question4[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 4 = " + answerSummary);
    }
  }
  // document.getElementById("pick-4").value = "Your answer to question three is " + txt;
}
function answerFive() {
  var question5 = document.forms[4];
  var txt = "";
  var k;
  for (k = 0; k < question5.length; k++) {
    if (question5[k].checked) {
      txt = txt + question5[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 5 = " + answerSummary);
    }
  }
  // document.getElementById("pick-5").value = "Your answer to question three is " + txt;
}
function answerSix() {
  var question6 = document.forms[5];
  var txt = "";
  var k;
  for (k = 0; k < question6.length; k++) {
    if (question6[k].checked) {
      txt = txt + question6[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 6 = " + answerSummary);
    }
  }
  // document.getElementById("pick-6").value = "Your answer to question three is " + txt;
}
function answerSeven() {
  var question7 = document.forms[6];
  var txt = "";
  var k;
  for (k = 0; k < question7.length; k++) {
    if (question7[k].checked) {
      txt = txt + question7[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 7 = " + answerSummary);
    }
  }
  // document.getElementById("pick-7").value = "Your answer to question three is " + txt;
}
function answerEight() {
  var question8 = document.forms[7];
  var txt = "";
  var k;
  for (k = 0; k < question8.length; k++) {
    if (question8[k].checked) {
      txt = txt + question8[k].value + " ";
      answerSummary.push(txt);
      console.log(" answerSummary add 8 = " + answerSummary);
    }
  }
  // document.getElementById("pick-8").value = "Your answer to question three is " + txt;
}

function calcScore() {
  secStart = 0;
  numberCorrect = 0;
  numberInCorrect = 0;
  numberNoAnswer = 0;
  clearInterval(secCounter);
  // document.getElementById("timer").innerHTML = ("0 seconds left");
  console.log("end " + secStart);
  answerOne();
  answerTwo();
  answerThree();
  answerFour();
  answerFive();
  answerSix();
  answerSeven();
  answerEight();
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
    numberNoAnswer = (number_questions) - (numberCorrect + numberInCorrect);
  }
  console.log(numberCorrect);
  document.getElementById("right").innerHTML = numberCorrect;
  console.log(numberInCorrect);
  document.getElementById("wrong").innerHTML = numberInCorrect;
  console.log(numberNoAnswer);
  document.getElementById("none").innerHTML = numberNoAnswer;
 
  hideMe();
  // window.location.href = "score_page.html";
    // document.getElementById("rightScore").innerHTML = numberCorrect;
    // document.getElementById("wrongScore").innerHTML =  numberInCorrect;
    // document.getElementById("noneScore").innerHTML =  numberNoAnswer;
  
  }

function startMe() {
  document.getElementById("start").style.display = "none";
  document.getElementById("Q1").style.visibility = "visible";
  document.getElementById("Q2").style.visibility = "visible";
  document.getElementById("Q3").style.visibility = "visible";
  document.getElementById("Q4").style.display = "block";
  document.getElementById("Q5").style.display = "block";
  document.getElementById("Q6").style.display = "block";
  document.getElementById("Q7").style.display = "block";
  document.getElementById("Q8").style.display = "block";
  document.getElementById("timerDiv").style.visibility = "visible";
  document.getElementById("calc").style.visibility = "visible";
  masterTimer();
}

function hideMe() {
  document.getElementById("heresMagic").style.display = "block";
  document.getElementById("Q1").style.visibility = "hidden";
  document.getElementById("Q2").style.visibility = "hidden";
  document.getElementById("Q3").style.visibility = "hidden";
  document.getElementById("Q4").style.display = "none";
  document.getElementById("Q5").style.display = "none";
  document.getElementById("Q6").style.display = "none";
  document.getElementById("Q7").style.display = "none";
  document.getElementById("Q8").style.display = "none";
  document.getElementById("timerDiv").style.visibility = "hidden";
  document.getElementById("calc").style.visibility = "hidden";
}
