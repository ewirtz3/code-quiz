var startTime = document.querySelector("#start-time");
var window = document.querySelector("#window");
var startButton = document.querySelector("#start-button")
var endPage = document.querySelector("#game-end");

var questions = [
    { question: 'Which of these is a CSS selector?'
        1: 'Element'
        2: 'Class'
        3: 'ID'
        4: 'All of the above'},
    { question: 'In HTML, the relationship between elements and their ancestor and descendant elements is known as what?'
        1: 'Family ties'
        2: 'Feudal system'
        3: 'Hierarchy'
        4: 'Adoption'
    },
    { question: 'The position of a(n) _______ element is relative to its closest positioned parent element.'
        1: 'Relative'
        2: 'Absolute'
        3: 'Fixed'
        4: 'Scrolled'
    },
    { question: 'Which of the following is an example of a string?'
        1: 'Spring is here!'
        2: 3
        3: true
        4: false
    },
    { question: 'Which of the following methods returns a random number between 9 and 1?'
        1: Math.floor
        2: Math.random
        3: Math.ceil
        4: Math.length
    }];

var correctAnswers = [4, 3, 2, 1, 2];

//user clicks start -- addEventListener -- timer starts, first question appears
startButton.addEventListener("click", function(event){
    event.preventDefault();
    nextPage();
});

function nextPage(){
    window.innerHTML = "";
    for (var i = 0; i < questions.length; i++){
        window.innerHTML = questions[i];
    }
};

//questions -- addEventListener to all answer buttons, correct/incorrect both move to next question, correct displays Correct! in green at the bottom, incorrect displays Incorrect! in red at the bottom AND deducts 10 seconds from the timer
//timer: counts down one second at a time UNLESS incorrect button is pressed
var incorrectAnswer = document.querySelector(".incorrect");
var correctAnswer = document.querySelector(".correct");
var timer = document.querySelector("#start-time");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function setTime(){
    clearInterval(interval);
    totalSeconds = 90;
};

function renderTime(){
    timer.textContent = 90;
    if (secondsElapsed >= 90) {
        window.innerHTML = "";
        window.value = endPage;
    }
}

function startTimer () {
    setTime();
    if (totalSeconds>0){
        interval = setInterval(function(){
            secondsElapsed++;
            renderTime();
        }, 1000);
}
function incorrectAns () {

}
correctAnswer.addEventListener("click", nextPage());
incorrectAnswer.addEventListener("click", function(event){
       
    }



//if timer runs out, questions stop and game end page shows

//game end page: final score is displayed and user enters their initials and clicks Submit. initials and score should go to local storage
var submitScoreButton = document.querySelector(".submit");
var initialsInput = document.querySelector("#initials");
var finalScore = document.querySelector("#score");

var user = {
    initials: initialsInput.value.trim(),
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
