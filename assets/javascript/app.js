// var cnt = 0;
//-----------------------
// set global variables
//-----------------------

// define secCounter and secStart for masterTimer here so calcScore works when time runs out and with button
// secStart sets number of seconds for masterTimer; secCounter is one second counter
var secCounter;
var secStart = 0;
function masterTimer( ){
  // 60 second timer
  secStart = 60;
  secCounter = setInterval(timer , 1000);
  // one second timer
  function timer() {
    secStart -= 1;
    if (secStart <= 0) {
      //stops counter when secStart <= 0
      clearInterval(secCounter);
      // call calcScore when 60 sec timer runs out
      calcScore();
    }
    // display timer
    document.getElementById("timer").innerHTML = (secStart);
  }
}

// set number_questions to number of question asked
var number_questions = 8;
// array to store correct and incorrect answers to questions
var answerSummary = [];
// variables to display player responses
var numberCorrect = 0;
var numberInCorrect = 0;
var numberNoAnswer = 0;

// functions answer'Number' get correct and incorrect responses for each question
// and add them to the answerSummary
function answerOne() {
  // loop through all the questions
  for (var j = 0; j < 8; j++) {
    var question = document.forms[j];
    var txt = "";
    var i;
    // check each radio button of the question for responses
    for (i = 0; i < question.length; i++) {
      if (question[i].checked) {
        txt = txt + question[i].value + " ";
        answerSummary.push(txt);
        console.log(" answerSummary " + j + " " + answerSummary);
      }
    }
  }
}

// calcScore can be called by done button or when 60 second timer runs out
// calculates number of correct, incorrect, and not answered questions
function calcScore() {
  // stop 60 second timer
  secStart = 0;
  // set counting variables to 0
  numberCorrect = 0;
  numberInCorrect = 0;
  numberNoAnswer = 0;
  // stop one second counter
  clearInterval(secCounter);
  // call function to calculate answer types for each set of radio buttons
  answerOne();
  // condition if no questions are answered
  if (answerSummary.length === 0) {
    answerSummary = ["a"];
  }
  // check answerSummary for number of correct and incorrect members
  for (var l = 0; l < answerSummary.length; l++) {
    if (answerSummary[l] === "correct ") {
      numberCorrect++;
    }
    if (answerSummary[l] === "incorrect ") {
      numberInCorrect += 1;
    }
    // calculate difference between total questions and sum of correct/incorrect answers
    numberNoAnswer = (number_questions) - (numberCorrect + numberInCorrect);
  }
  // display values for correct, incorrect, and not answered question
  document.getElementById("right").innerHTML = numberCorrect;
  document.getElementById("wrong").innerHTML = numberInCorrect;
  document.getElementById("none").innerHTML = numberNoAnswer;
 // hide question 'page'
  hideMe();
  }

// startMe changes divs displayed when going from 'first' to 'question' page
function startMe() {
  document.getElementById("start").style.display = "none";
  document.getElementById("Q1").style.display = "block";
  document.getElementById("Q2").style.display = "block";
  document.getElementById("Q3").style.display = "block";
  document.getElementById("Q4").style.display = "block";
  document.getElementById("Q5").style.display = "block";
  document.getElementById("Q6").style.display = "block";
  document.getElementById("Q7").style.display = "block";
  document.getElementById("Q8").style.display = "block";
  document.getElementById("timerDiv").style.display = "block";
  document.getElementById("calc").style.display = "block";
  document.getElementById("start-image").style.display = "none";
  document.getElementById("end-image").style.display = "none";
  document.getElementById("heresMagic").style.display = "none";
  document.getElementById("replay").style.display = "none";
  masterTimer();
  resetForms();
}
// hideMe changes divs displayed when going from 'question' to 'last' pages
function hideMe() {
  document.getElementById("heresMagic").style.display = "block";
  document.getElementById("Q1").style.display = "none";
  document.getElementById("Q2").style.display = "none";
  document.getElementById("Q3").style.display = "none";
  document.getElementById("Q4").style.display = "none";
  document.getElementById("Q5").style.display = "none";
  document.getElementById("Q6").style.display = "none";
  document.getElementById("Q7").style.display = "none";
  document.getElementById("Q8").style.display = "none";
  document.getElementById("timerDiv").style.display = "none";
  document.getElementById("calc").style.display = "none";
  document.getElementById("end-image").style.display = "block";
  document.getElementById("replay").style.display = "block";
}

// resets radio buttons and array to store answer results
function resetForms() {
  document.getElementById("form0").reset();
  document.getElementById("form1").reset();
  document.getElementById("form2").reset();
  document.getElementById("form3").reset();
  document.getElementById("form4").reset();
  document.getElementById("form5").reset();
  document.getElementById("form6").reset();
  document.getElementById("form7").reset();
  answerSummary = [];
}
