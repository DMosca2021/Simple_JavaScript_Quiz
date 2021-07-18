// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question ---- start with 10 questions, 4 multiple choice each.
// WHEN I answer a question ------- reuse 10 correct answers over to complete multiple choices 
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


// function with add event listener for start button to start the quiz.
// need countdown timer to start with the quiz --- time left needs to be recorded as highscore 
// add time reduction function for incorrect answers
// make an array of objects(questions) with properties (1.correct answer, 2.array of possible answers 3.)
// store the questions and corresponding correct answers 
// add event listener for user answer selection so selection can be stored on the local storage
// creat a function to compare the user selection with the correct answer for that question
// use for loops to go through question and answer arrays
// stop the quiz once question array is complete or if the timer is === 0
// once the game is over user can save their score attached with their initials to be stored on the local storage.

// menu for highscore needs to link to a separate html 
// ---do the same for change of difficulty and bonus quiz

// personal objectives after criteria is met and if time permits
// make start button change to "Good Luck!" after click event
// add at least 2 additional question arrays for different difficulties easy med hard
// create new q/a arrays to incorporate HTML and CSS fundamentals
// make high score only include top 5 highest scores, add date stamp
// add completed and incomplete quiz counter to high scores 
// maybe bonus questions for more time/higher score 

// ***i need check boxes for answers and submit button to start answer check function ---> and next Q


let quizArea = document.querySelector(".quiz-area");
let quizTimer = document.querySelector(".quiz-timer");
let startBtn = document.querySelector(".start-btn");
let correctAns = document.querySelector(".correct-answer");
let incorrectAns = document.querySelector(".incorrect-answer");
let qDisplay = document.querySelector("#question");
let aDisplay = document.querySelector("#answer");

let chosenQuestion = ""; 
let correctCount = 0;
let incorrectCount = 0;
let highscore = 0;
let timer;
let timerCount;

// questions array 
let questions = [
    {
        question1: "What is JavaScript",
    },{
        question2: "What is HTML",
    },{
        question3: "What is CSS",
    },{
        question4: "What is JQuery",
    }
]
console.log(questions[0])
console.log(questions.length)
    // {
    //     question: "What is JavaScript",
    //     choice1: "I don't know.",
    //     choice2: "Type of Coffee.",
    //     choice3: "I know but I'm not telling",
    //     choice4: "Where are we?",
    // },{
    //     question: "What is HTML",
    //     choice1: "I don't know.",
    //     choice2: "Type of programming language.",
    //     choice3: "I know but I'm not telling",
    //     choice4: "Where are we?",
    // },{
    //     question: "What is CSS",
    //     choice1: "I don't know.",
    //     choice2: "The Style.",
    //     choice3: "I know but I'm not telling",
    //     choice4: "Where are we?",
    // },{
    //     question: "What is JQuery",
    //     choice1: "I don't know.",
    //     choice2: "Shorthand JavaScript",
    //     choice3: "I know but I'm not telling",
    //     choice4: "Where are we?",
    // }

let answers = [
    {
        answer1: "I don't know.",
    },{
        answer2: "Type of programming language.",
    },{
        answer3: "The Style.",
    },{
        answer4: "Shorthand JavaScript",
    }
]

// index of the starting question 
// let firstQuestion = 0;

// index of last question
// const lastQuestion = questions.length - 1;

// The init function is called when the page loads 
function init() {
    getCorrect();
    getIncorrect();
}

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    isWin = false;
    timerCount = 300;
    // Prevents start button from being clicked when round is in progress
    startBtn.disabled = true;
    renderQuiz()
    startTimer()
}

// -----------CHANGE THIS TO COLLECT CORRECT AND INCORRECT ANSWERS------------
// The winGame function is called when the win condition is met
// function winGame() {
//     wordBlank.textContent = "YOU WON!!!🏆 ";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
// }
  
  // The loseGame function is called when timer reaches 0
//   function loseGame() {
//     wordBlank.textContent = "GAME OVER";
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
// }
// ---------------------------------------------------------------------------

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      quizTimer.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
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
    // Randomly picks question from question array
    chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(chosenQuestion);
    // lettersInChosenWord = chosenWord.split("");
    // numBlanks = lettersInChosenWord.length;
    // blanksLetters = []
    // Uses loop to push blanks to blankLetters array
    // for (var i = 0; i < numBlanks; i++) {
    //   blanksLetters.push("_");
    // }
    // Converts blankLetters array into a string and renders it on the screen
    qDisplay.textContent = chosenQuestion
}














startBtn.addEventListener("click", startQuiz);