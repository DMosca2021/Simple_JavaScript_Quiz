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

let quizArea = document.querySelector(".quiz-area");
let quizTimer = document.querySelector(".quiz-timer");
let startBtn = document.querySelector(".start-btn");
let correctAns = document.querySelector(".correct-answer");
let incorrectAns = document.querySelector(".incorrect-answer");


// let chosenAnswer = "";  not sure if i need this 
let correctCount = 0;
let incorrectCount = 0;
let highscore = 0;
let timer;
let timerCount;

// questions array 
let questions = [
    {
        question: "What is JavaScript",
        answer: "I don't know.",
        choice1: "I don't know.",
        choice2: "Type of Coffee.",
        choice3: "I know but I'm not telling",
        choice4: "Where are we?",
    }
    {
        question: "What is HTML",
        answer: "Type of programming language.",
        choice1: "I don't know.",
        choice2: "Type of programming language.",
        choice3: "I know but I'm not telling",
        choice4: "Where are we?",
    }
    {
        question: "What is CSS",
        answer: "The Style.",
        choice1: "I don't know.",
        choice2: "The Style.",
        choice3: "I know but I'm not telling",
        choice4: "Where are we?",
    }
    {
        question: "What is JQuery",
        answer: "Shorthand JavaScript",
        choice1: "I don't know.",
        choice2: "Shorthand JavaScript",
        choice3: "I know but I'm not telling",
        choice4: "Where are we?",
    }
]

// index of the starting question 
let firstQuestion = 0;

// index of last question
const lastQuestion = questions.length - 1;