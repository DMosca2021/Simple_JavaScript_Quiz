// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question 
// WHEN I answer a question 
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


//--- time left needs to be recorded as highscore 
// add time reduction function for incorrect answers
// store the questions and corresponding correct answers 
// add event listener for user answer selection so selection can be stored on the local storage
// creat a function to compare the user selection with the correct answer for that question
// use for loops to go through question and answer arrays
// stop the quiz once question array is complete or if the timer is === 0
// once the game is over user can save their score attached with their initials to be stored on the local storage.

let startBtn = document.querySelector(".start-btn");
let quizTimer = document.querySelector(".quiz-timer");
let quizArea = document.querySelector(".quiz-area");
let questionDisplay = document.querySelector("#question");
let answerDisplay = document.querySelector("#answers");
let scoreEntry = document.querySelector(".highscore-entry")
let saveBtn = document.querySelector("#save")

quizArea.setAttribute("style", "visibility: hidden");
scoreEntry.setAttribute("style", "visibility: hidden");

let correctCount = 0;
let incorrectCount = 0;
let highscore;
let timer;
let timerCount;

let currentQuestion = {};
let availableQuestions = [];
let questionIndex = Math.floor(Math.random() * availableQuestions.length);

// questions array 
let questionsArray = [
    {
        question: "Where in the HTML does the JavaScript link go?",
        choices: ["In the head with the CSS link.", "Where ever you want, location does not matter.", "At the bottom of the body.", "You do not need to link JavaScript."] ,
        correctAnswer: "At the bottom of the body."
    },{
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<js>", "<script>", "<javascript>", "<scripting>"],
        correctAnswer: "<script>",
    },{
        question: "How do you call a function named myFunction?",
        choices: ["call function myFunction()", "call myFunction()", "myFunction", "myFunction()"],
        correctAnswer: "myFunction()",
    },{
        question: "How does a FOR loop start?",
        choices: ["for (i = 0; i < 5; i++)", "for {i = 0; i < 5; i++}", "for [i = 0; i < 5; i++]", "(for i = 0, i < 5, i++)"],
        correctAnswer: "for (i = 0; i < 5; i++)",
    },{
        question: "Which operator is used to assign a value to a variable?",
        choices: ["=", "X", "*", "-"],
        correctAnswer: "=",
    }
]



// The init function is called when the page loads 
function init() {
    getCorrect();
    getIncorrect();
}

// The startQuiz function is called when the start button is clicked, starts timer and shows quiz
function startQuiz() {
    isDone = false;
    timerCount = 60;
    highscore = 0
    startBtn.disabled = true;
    availableQuestions = [...questionsArray];
    quizArea.setAttribute("style", "visibility: visible");
    renderQuiz();
    startTimer();
};

// The setTimer function starts and stops the timer
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      quizTimer.textContent = "Time left: " + timerCount;
      if (timerCount === 0) {
        isDone = true
        clearInterval(timer)
        endQuiz()
      };
    }, 1000)
};

// Creates quiz on screen, creates answer choices, checks answers and moves to next question. 
function renderQuiz() {
    let currentQuestion = availableQuestions[questionIndex];
    questionDisplay.innerText = currentQuestion.question; 

    console.log(questionIndex) // Shows first question index

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let answerIndex = currentQuestion.choices[i];
        console.log(answerIndex);
        console.log(currentQuestion.choices[i]) //Logs the choices for the current question

        let answer = document.createElement("button");
        answer.id = "answer";
        answer.textContent = answerIndex
        answer.setAttribute("value", "false")
        answerDisplay.append(answer);
    
        if (currentQuestion.choices[i] === currentQuestion.correctAnswer) {
            answer.setAttribute("value", "true")
            console.log(answer.value) // Shows correct answer value changed to true
        }
        
    }
};

function checkAnswer() {
    answerDisplay.addEventListener("click", function(event) {
        let element = event.target;

        if (element.matches("button")) {
            let answerValue = element.getAttribute("value");

            console.log (answerValue); //console log shows the true/false value for the choices 

            if (answerValue === "true"){
                alert("correct")
                questionIndex++
                if (questionIndex > 4) {
                    questionIndex = 0
                }
                questionDisplay.innerText = currentQuestion.question 
                console.log(currentQuestion.question)
                answerDisplay.textContent = "";
                localStorage.setItem("correctCount", correctCount)
                correctCount++ 
                renderQuiz(); 
            } else {
                alert("incorrect")
                timerCount = timerCount - 10;
                incorrectCount++
                localStorage.setItem("incorrectCount", incorrectCount)
            }
               
        }
            
    })
};

checkAnswer();

function endQuiz(){
    isDone = true;
    startBtn.disabled = false;
    answerDisplay.textContent = "";
    quizArea.setAttribute("style", "visibility: hidden");
    alert("Quiz Completed!") 
    scoreEntry.setAttribute("style", "visibility: visible");
    if (timerCount >= 0) {
        if (isDone && timerCount > 0) {
            timerCount = highscore 
            console.log(highscore)
            localStorage.setItem("Score", highscore)
        }
      };
    return;
};

// function to handle local storage 

function saveScore() {
  let userName = {
    comment: comment.value.trim()
  };
  localStorage.setItem("userName", JSON.stringify(userName));
};

function renderScore() {
    // Use JSON.parse() to convert text to JavaScript object
    let lastUser = JSON.parse(localStorage.getItem("userName"));
    // Check if data is returned, if not exit out of the function
    if (userName !== null) {
    document.getElementById("saved-name").innerHTML = lastUser.userName;
    document.getElementById("saved-score").innerHTML = lastUser.highscore;
    document.getElementById("saved-correct").innerHTML = lastUser.correctCount;
    document.getElementById("saved-incorrect").innerHTML = lastUser.incorrectCount;
    } else {
      return;
    }
}

startBtn.addEventListener("click", startQuiz);
saveBtn.addEventListener("click", saveScore);