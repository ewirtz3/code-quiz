var startTime = document.querySelector("#start-time");
var window = document.querySelector("#window");
var startButton = document.querySelector("#start-button")
//user clicks start -- addEventListener -- timer starts, first question appears
startButton.addEventListener("click", function(event){
    window.innerHTML = "";
    
})
//questions -- addEventListener to all answer buttons, correct/incorrect both move to next question, correct displays Correct! in green at the bottom, incorrect displays Incorrect! in red at the bottom AND deducts 10 seconds from the timer
//timer: counts down one second at a time UNLESS incorrect button is pressed
//if timer runs out, questions stop and game end page shows


