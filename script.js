//global variables for window, timer, and time-related items
var windowDiv = document.querySelector("#window");
var endPage = document.querySelector("#game-end");
var questionDiv = document.querySelector("#questionDiv");
var timer = document.querySelector("#start-time");
var secondsElapsed = 0;
var MAX_TIME = 90;
var interval = MAX_TIME;
var totalSeconds = MAX_TIME - secondsElapsed;

//startPage function runs, sets Start Page upon document load
document.onload = startPage();

//startPage function: renders the start page
function startPage(){
    var div = document.createElement("div");
    div.setAttribute("class", "col-6 card border-primary mb-3");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-header text-align-center");
    div2.textContent = "Coding Quiz Challenge";

    var div3 = document.createElement("div");
    div3.setAttribute("class", "card-body text-primary");

    var h4 = document.createElement("h4");
    h4.textContent = "Try to answer the following code-related questions within the time given. Keep in mind that incorrect answers will subtract 10 seconds from your time!";

    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-primary mb-3");
    button.setAttribute("type", "button");
    button.setAttribute("id", "start-button");
    button.textContent = ("Start");

    windowDiv.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(h4);
    div3.appendChild(button);

    setTime();
};

//defining the setTime function
function setTime(){
    clearInterval(interval);
    totalSeconds = MAX_TIME;
};

//function to run the timer
function startTimer() {
    setTime();
    if (totalSeconds>0){
        interval = setInterval(function(){
            timer.innerHTML = totalSeconds--;
        }, 1000);
    }
    else endPage();
}

//user clicks start -- addEventListener -- timer starts, first question appears
window.addEventListener("load", function(event){
    var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function(event){
    event.preventDefault();
    windowDiv.innerHTML ="";
    questionDiv.classList.remove("d-none");
    changeQuestion();
    startTimer();
    });
});

var questions = [
    { 
        question: 'Which of these is a CSS selector?',
        answer: { 1:'a) Element', 2: 'b) Class', 3: 'c) ID', 4: 'd) All of the above'},
        correct: 'b) Class'
    },
    { 
        question: 'In HTML, the relationship between elements and their ancestor and descendant elements is known as what?',
        answer: { 1: 'a) Family ties', 2: 'b) Feudal system', 3: 'c) Hierarchy', 4: 'd) Adoption'},
        correct: 'c) Hierarchy'
    },
    { 
        question: 'The position of a(n) _______ element is relative to its closest positioned parent element.',
        answer: { 1: 'a) Relative', 2: 'b) Absolute', 3: 'c) Fixed', 4: 'd) Scrolled'},
        correct: 'b) Absolute'
    },
    { 
        question: 'Which of the following is an example of a string?',
        answer: { 1: 'a) Spring is here!', 2: 'b) 3', 3: 'c) true', 4: 'd) false'},
        correct: 'a) Spring is here!'
    },
    { 
        question: 'Which of the following methods returns a random number between 9 and 1?',
        answer: { 1: 'a) Math.floor', 2: 'b) Math.random', 3: 'c) Math.ceil', 4: 'd) Math.length'},
        correct: 'b) Math.random'
    }
];

//global variables for answer buttons, index in questions array, and current time
var currentIndex = 0
var totalSeconds = totalSeconds - secondsElapsed;
var answerBtn1 = document.getElementById("answer1");
var answerBtn2 = document.getElementById("answer2");
var answerBtn3 = document.getElementById("answer3");
var answerBtn4 = document.getElementById("answer4");
var questionHeader = document.getElementById("questionHeader");
var question = questions[currentIndex].question;
var answer1 = questions[currentIndex].answer[1];
var answer2 = questions[currentIndex].answer[2];
var answer3 = questions[currentIndex].answer[3];
var answer4 = questions[currentIndex].answer[4];


//function to go through questions array
function changeQuestion() {
    if (currentIndex === questions.length || totalSeconds <=0) {
        gameEnd();
    }
    questionHeader.innerHTML = question;
    answerBtn1.innerHTML = answer1;
    answerBtn2.innerHTML = answer2;
    answerBtn3.innerHTML = answer3;
    answerBtn4.innerHTML = answer4;
};


// questions -- addEventListener to all answer buttons, click target saves as userGuess variable
var choices = document.getElementById("choices");

choices.addEventListener("click", function(event){
    var userGuess = event.target;
    if (userGuess.matches("#answer1") === true) {
        userGuess === answer1;
    }
    else if (userGuess.matches("#answer2") === true) {
        userGuess === answer2;
    }
    else if (userGuess.matches("#answer3") === true) {
        userGuess === answer3;
    }
    else if (userGuess.matches("#answer4") === true) {
        userGuess === answer4;
    }
    return userGuess;
});

// function to check userGuess against correct answer, correct/incorrect both move to next question, correct displays 'Hell yeah! at the bottom, incorrect displays 'Hell no!' AND deducts 10 seconds from totalSeconds
function runQuiz(userGuess) {
    var correctAnswer = questions[currentIndex].correct;
    var outcome = document.getElementById("outcome");
    if (userGuess === correctAnswer) {
        outcome.innerHTML = 'Hell yeah!';
    }
    else {
        outcome.innerHTML = 'Hell no!'
        totalSeconds = totalSeconds - 10;
    }
    currentIndex++;
    changeQuestion(currentIndex);
};

for (i = 0; i < questions.length; i++){
    changeQuestion();
    runQuiz();
}
    
//function to end game and render page for user to input their initials
function gameEnd() {
    clearInterval(interval);
    questionDiv.classList.add("d-none");
    endPage.classList.remove("d-none");
    return finalScore.innerHTML = timer.innerHTML;
};

// game end page: final score is displayed and user enters their initials and clicks Submit. initials and score should go to local storage
var submitScoreButton = document.querySelector(".submit");
var initialsInput = document.querySelector("#initials");
var finalScore = document.querySelector("#score");

//user info saves to user object
var user = {
    initials: initialsInput.value.trim(),
    score: finalScore.innerHTML
};
console.log(user);

var highScoresPage = document.getElementById("highscores");
// upon click of Submit, set new user to storage, pull up high scores page
submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    windowDiv.innerHTML = "";
    endPage.classList.add("d-none");
    highScoresPage.classList.remove("d-none");
    renderScores();
})

//global variables for View Scores link and Scores array
var viewScores = document.querySelector("#view");
var scores = [];
//function to render the scores, pulling from local storage
function renderScores() {
    for (var i = 0; i < scores.length; i++) {
        var li = document.createElement("li");
        li.textContent = user;
        var storedScores = JSON.parse(localStorage.getItem("user"));
        if (storedScores !== null) {
            scores = storedScores;
        }
        scoreList = document.getElementById("score-list");
        scoreList.appendChild(li);       
    }
}

//global variables referencing back and clear buttons, addEventListeners to each
var backBtn = document.getElementById("back");
var clearBtn = document.getElementById("clear");
backBtn.addEventListener("click", function(event){
    highScoresPage.classList.add("d-none");
    startPage();
});
clearBtn.addEventListener("click", function(event){
    localStorage.removeItem("user");
    scores =[];
})

//addEventListener to View Scores link
viewScores.addEventListener("click", function(event){
    highScoresPage.classList.remove("d-none");
    var storedScores = JSON.parse(localStorage.getItem("user"));
    if (storedScores !== null) {
        scores = storedScores;
    }
    renderScores();
});



