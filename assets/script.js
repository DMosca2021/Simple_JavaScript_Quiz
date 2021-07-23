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

// menu for highscore needs to link to a separate html 
// ---do the same for change of difficulty and bonus quiz

// let corCount = document.querySelector(".correct-answer"); --->for high score page
// let incorCount = document.querySelector(".incorrect-answer"); ---> for high score page

let startBtn = document.querySelector(".start-btn");
let quizTimer = document.querySelector(".quiz-timer");
let quizArea = document.querySelector(".quiz-area");
let questionDisplay = document.querySelector("#question");
let answerDisplay = document.querySelector("#answers");
let choiceA = document.querySelector("#A")
let choiceB = document.querySelector("#B")
let choiceC = document.querySelector("#C")
let choiceD = document.querySelector("#D")
let submitBtn = document.querySelector(".submit-btn");

let correctCount = 0;
let incorrectCount = 0;
let highscore = 0;
let timer;
let timerCount;
let penaltyTime = 10;

let currentQuestion = {};
let correctAnswers = true
let availableQuestions = [];

// questions array 
let questionsArray = [
    {
        question: "Where in the HTML does the JavaScript link go?",
        choices: ["In the head with the CSS link.", "Where ever you want, location does not matter.", "At the bottom of the body.", "You do not need to link JavaScript, it's already built in."] ,
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
    timerCount = 300;
    highscore = 0
    startBtn.disabled = true;
    availableQuestions = [...questionsArray];
    console.log(availableQuestions);
    renderQuiz();
    startTimer();
};

// The setTimer function starts and stops the timer, will trigger *(winGame() and loseGame())* <----replace functions to store time as score and end/fail quiz.
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      quizTimer.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isDone && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
        //   winGame();  ----> CHANGE THIS TO STORE REMAINING TIME AS HIGHSCORE
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();  -----> CHANGE THIS TO END/FAIL THE QUIZ 
      }
    }, 1000);
}

// Creates quiz on screen
function renderQuiz() {
    // randomize first question choice
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);

    console.log(questionIndex); // logs 3 first time

    // keep track of current question
    currentQuestion = availableQuestions[questionIndex];
    questionDisplay.innerText = currentQuestion.question; // works shows question on page

    console.log(availableQuestions[questionIndex]); // works --- 3 would be jQuery(lastQ) logged jQuery
    console.log(currentQuestion.choices); // works shows current question and the correct choice array

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        console.log(currentQuestion.choices.length)
        let answer = document.createElement("button");
        answer.className = "answer";
        answer.setAttribute("inputmode", "radio")
        answer.setAttribute("style", "height: 15px; width: 15px; background-color: lightgreen; display: flex; flex-direction: column;")
        answer.textContent = currentQuestion.choices
        answerDisplay.append(answer);
        
    }
    // for each loop 
    

    // choiceA.innerText = currentQuestion.choiceA;
    // choiceB.innerText = currentQuestion.choiceB;
    // choiceC.innerText = currentQuestion.choiceC;
    // choiceD.innerText = currentQuestion.choiceD;
    
    // Removes question from array for no repeats.
    // availableQuestions.splice(questionIndex, 1);

    // acceptingAnswers = true
}

// check answer function

// function to end quiz

// function to handle local storage 

startBtn.addEventListener("click", startQuiz);

// `` <---basically if else 

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }