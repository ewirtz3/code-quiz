var startTime = document.querySelector("#start-time");
var window = document.querySelector("#window");
var startButton = document.querySelector("#start-button")
var questionOne = document.querySelector("#question1");
var questionTwo = document.querySelector("#question2");
var questionThree = document.querySelector("#question3");
var questionFour = document.querySelector("#question4");
var questionFive = document.querySelector("#question5");

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//user clicks start -- addEventListener -- timer starts, first question appears
startButton.addEventListener("click", function(event){
    event.preventDefault();

    window.innerHTML = "";


});
//questions -- addEventListener to all answer buttons, correct/incorrect both move to next question, correct displays Correct! in green at the bottom, incorrect displays Incorrect! in red at the bottom AND deducts 10 seconds from the timer
//timer: counts down one second at a time UNLESS incorrect button is pressed
//if timer runs out, questions stop and game end page shows

//game end page: final score is displayed and user enters their initials and clicks Submit. initials and score should go to local storage
var submitScoreButton = document.querySelector(".submit");
var initialsInput = document.querySelector("#initials");
var finalScore = document.querySelector("#score");

var user = {
    initials: initialsInput.nodeValue.trim(),
    score: finalScore.value
};
console.log(user);

//set new submission to storage upon click of Submit
submitScoreButton.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    window.innerHTML = ""
}

//
