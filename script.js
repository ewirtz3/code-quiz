var startTime = document.querySelector("#start-time");
var windowDiv = document.querySelector("#window");
var endPage = document.querySelector("#game-end");

startPage();
setTime();

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
};

//timer: counts down one second at a time UNLESS incorrect button is pressed
var timer = document.querySelector("#start-time");
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function setTime(){
    clearInterval(interval);
    totalSeconds = 90;
};

function renderTime(){
    timer.textContent = totalSeconds - secondsElapsed;
    if (secondsElapsed >= 90) {
        windowDiv.innerHTML = "";
        windowDiv.innerHTML = endPage;
    }
};

var questions = [
    { question: 'Which of these is a CSS selector?'},
    { question: 'In HTML, the relationship between elements and their ancestor and descendant elements is known as what?'},
    { question: 'The position of a(n) _______ element is relative to its closest positioned parent element.'},
    { question: 'Which of the following is an example of a string?'},
    { question: 'Which of the following methods returns a random number between 9 and 1?'}
    ];

var answers = [
    {   1: 'a) Element',
        2: 'b) Class',
        3: 'c) ID',
        4: 'd) All of the above'},
    {   1: 'a) Family ties',
        2: 'b) Feudal system',
        3: 'c) Hierarchy',
        4: 'd) Adoption'},
    {   1: 'a) Relative',
        2: 'b) Absolute',
        3: 'c) Fixed',
        4: 'd) Scrolled'},
    {   1: 'a) Spring is here!',
        2: 'b) 3',
        3: 'c) true',
        4: 'd) false'},
    {   1: 'a) Math.floor',
        2: 'b) Math.random',
        3: 'c) Math.ceil',
        4: 'd) Math.length'}
    ];

//function to attach question and answer info to questionDiv
createCard = function(){
    for (var i = 0; i < questions.length; i++){
    var div = document.createElement("div");
    div.setAttribute("class", "col-6 card border-primary mb-3");

    var question = questions[i];
    question = document.createElement("div");
    question.setAttribute("class", "card-header text-align-center");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "card-body text-primary");

    var answer = answers[i];
    answer = document.createElement("button");
    answer.setAttribute("class", "btn btn-primary");
    answer.setAttribute("type", "button");

    windowDiv.appendChild(div);
    div.appendChild(div2);
    div.appendChild(question);
    div2.appendChild(answer);
}};

function startTimer() {
    setTime();
    if (totalSeconds>0){
        interval = setInterval(function(){
            secondsElapsed++;
            renderTime();
        }, 1000);
};

//user clicks start -- addEventListener -- timer starts, first question appears
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function(event){
    event.preventDefault();
    windowDiv.innerHTML ="";
    createCard();
    startTimer();
});



var correctAnswers = [4, 3, 2, 1, 2];
var questionNum = 0;
windowDiv.innerHTML = questions[i];
    
//questions -- addEventListener to all answer buttons, correct/incorrect both move to next question, correct displays Correct! in green at the bottom, incorrect displays Incorrect! in red at the bottom AND deducts 10 seconds from the timer


//if timer runs out, questions stop and game end page shows

//game end page: final score is displayed and user enters their initials and clicks Submit. initials and score should go to local storage
var submitScoreButton = document.querySelector(".submit");
// var initialsInput = document.querySelector("#initials");
// var finalScore = document.querySelector("#score");

// var user = {
//     initials: initialsInput.value.trim(),
//     score: finalScore.value
// };
// console.log(user);

// set new submission to storage upon click of Submit
submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    windowDiv.innerHTML = "";
})}
