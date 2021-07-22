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

// personal objectives after criteria is met and if time permits
// make start button change to "Good Luck!" after click event
// add at least 2 additional question arrays for different difficulties easy med hard
// create new q/a arrays to incorporate HTML and CSS fundamentals
// make high score only include top 5 highest scores, add date stamp
// add completed and incomplete quiz counter to high scores 
// maybe bonus questions for more time/higher score 

// ***i need check boxes for answers and submit button to start answer check function ---> and next Q
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
        // choices: [] <---use array for answers
        choiceA: "In the head with the CSS link.", 
        choiceB: "Where ever you want, location does not matter.", 
        choiceC: "At the bottom of the body.", 
        choiceD: "You do not need to link JavaScript, it's already built in.",
        correctAnswer: "C"
    },{
        question: "Inside which HTML element do we put the JavaScript?",
        choiceA: "<js>", 
        choiceB: "<script>", 
        choiceC: "<javascript>", 
        choiceD: "<scripting>",
        correctAnswer: "B"
    },{
        question: "How do you call a function named myFunction?",
        choiceA: "call function myFunction()", 
        choiceB: "call myFunction()", 
        choiceC: "myFunction", 
        choiceD: "myFunction()",
        correctAnswer: "D"
    },{
        question: "How does a FOR loop start?",
        choiceA: "for (i = 0; i < 5; i++)", 
        choiceB: "for {i = 0; i < 5; i++}", 
        choiceC: "for [i = 0; i < 5; i++]", 
        choiceD: "(for i = 0, i < 5, i++)",
        correctAnswer: "A"
    },{
        question: "Which operator is used to assign a value to a variable?",
        choiceA: "=",
        choiceB: "X",
        choiceC: "*",
        choiceD: "-",
        correctAnswer: "A"
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

    // for each loop 
    currentQuestion.choices.forEach(element => {
        
    });

    choiceA.innerText = currentQuestion.choiceA;
    choiceB.innerText = currentQuestion.choiceB;
    choiceC.innerText = currentQuestion.choiceC;
    choiceD.innerText = currentQuestion.choiceD;
    
    // Removes question from array for no repeats.
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true
}

// check answer function

// function to end quiz

// function to handle local storage 

startBtn.addEventListener("click", startQuiz);

// `` <---basically if else 