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

let startBtn = document.querySelector(".start-btn");
let quizTimer = document.querySelector(".quiz-timer");
let quizArea = document.querySelector(".quiz-area");
let questionDisplay = document.querySelector("#question");
let answerDisplay = document.querySelector("#answers");
let submitBtn = document.querySelector(".submit-btn");

// let addAnswer = document.createElement("ul");
// let corCount = document.querySelector(".correct-answer"); --->for high score page
// let incorCount = document.querySelector(".incorrect-answer"); ---> for high score page
// let chosenQuestion = ""; 

let correctCount = 0;
let incorrectCount = 0;
let highscore = 0;
let timer;
let timerCount;
let penaltyTime = 10;

let questionIndex = 0;

// questions array 
let questionsArray = [
    {
        question: "What is JavaScript",
        answers: [ 
        {
            A: "I don't know.", 
            B: "Type of Coffee.", 
            C: "I know but I'm not telling", 
            D: "Where are we?",
        }],
        correctAnswer: "A",
    },{
        question: "What is HTML",
        answers: [
        {
            A: "I don't know.", 
            B: "Type of programming language.", 
            C: "I know but I'm not telling", 
            D: "Where are we?",
        }],
        correctAnswer: "Type of programming language.",
    },{
        question: "What is CSS",
        answers: [
        {
            A: "I don't know.", 
            B: "The Style.", 
            C: "I know but I'm not telling", 
            D: "Where are we?",
        }],
        correctAnswer: "The Style."
    },{
        question: "What is JQuery",
        answers: [
        {
            A: "I don't know.", 
            B: "Shorthand JavaScript", 
            C: "I know but I'm not telling", 
            D: "Where are we?",
        }],
        correctAnswer: "Shorthand JavaScript"
    }
]

console.log(questionsArray[0].answers[0]);


// The init function is called when the page loads 
function init() {
    getCorrect();
    getIncorrect();
}

// The startQuiz function is called when the start button is clicked
function startQuiz() {
    isDone = false;
    timerCount = 300;
    // Prevents start button from being clicked when round is in progress
    startBtn.disabled = true;
    renderQuiz()
    startTimer()
}

// The setTimer function starts and stops the timer, will triggers (winGame() and loseGame()) <----replace functions to store time as score and end/fail quiz.
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
    let output = [];
    let choices;
    let label = document.createElement("label")

    for(var i=0; i<questionsArray.length; i++){
        // variable to store the list of possible answers
        choices = [];
        
        // and for each available answer...
        for (letter in questionsArray[i].answers) {

            console.log(questionsArray[i].answers)
        //   ...add an HTML radio button
          answerDisplay.appendChild(label);
        //   label.setAttribute("input type", "radio");
            // `<label>
            //   <input type="radio" name="question${questionNumber}" value="${letter}">
            //   ${letter} :
            //   ${currentQuestion.answers[letter]}
            // </label>`
           
          
        }
  
        // // // add this question and its answers to the output
        // output.push(
        //   `<div class="question"> ${currentQuestion.question} </div>
        //   <div class="answers"> ${answers.join('')} </div>`
        // );
    };
  
    // finally combine our output list into one string of HTML and put it on the page
    quizArea.innerHTML = output.join('');
}


function checkAnswer(event) {
    let element = event.target;

    if (element.textContent == questionsArray[questionIndex].correctAnswer) {
        score++;
    } else {
        timerCount = timerCount - penaltyTime;
    }

    questionIndex++;

}


startBtn.addEventListener("click", startQuiz);