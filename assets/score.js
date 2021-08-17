let savedName = document.querySelector("#saved-name")
let savedScore = document.querySelector("#saved-score")
let savedCorrect = document.querySelector("#saved-correct")
let savedIncorrect = document.querySelector("#saved-incorrect")
let scoreBtn = document.querySelector("#show-score")

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

    // Check if data is returned, if not exit out of the function
    if (userName !== null) {
    // document.getElementById("saved-name").innerHTML = lastUser.userName;
    // document.getElementById("saved-score").innerHTML = lastUser.highscore;
    // document.getElementById("saved-correct").innerHTML = lastUser.correctCount;
    // document.getElementById("saved-incorrect").innerHTML = lastUser.incorrectCount;

    } else {
      return;
    }
}

scoreBtn.addEventListener("click", renderScore)