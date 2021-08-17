let savedName = document.querySelector("#saved-name")
let savedScore = document.querySelector("#saved-score")
let savedCorrect = document.querySelector("#saved-correct")
let savedIncorrect = document.querySelector("#saved-incorrect")
let scoreBtn = document.querySelector("#show-score")

let scoreDisplay = document.querySelector(".score-area")

scoreDisplay.setAttribute("style", "visibility: hidden")

function renderScore() {
    // Use JSON.parse() to convert text to JavaScript object
    let lastUser = JSON.parse(localStorage.getItem("userName"));
    let lastScore = JSON.parse(localStorage.getItem("score"));
    let lastCorrect = JSON.parse(localStorage.getItem("correctCount"));
    let lastIncorrect = JSON.parse(localStorage.getItem("incorrectCount"));
    console.log(lastUser);
    console.log(lastScore);
    console.log(lastCorrect);
    console.log(lastIncorrect);
    savedName.innerHTML = lastUser
    savedScore.innerHTML = lastScore
    savedCorrect.innerHTML = lastCorrect
    savedIncorrect.innerHTML = lastIncorrect
}

scoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    scoreDisplay.setAttribute("style", "visibility: visible")
    renderScore();
});