var questionText = document.getElementById('question-text');
var timer = document.getElementById('timer');
var score = document.getElementById('score');
var answers = document.getElementById('answers');
var leaderboardScores = document.getElementById('leaderboard-scores');

const startButton = document.getElementById('start-button');
var timeLeft = 30;
var currentScore = 0;
var finalScore;
var gameOverCalled = false;

    // Creating questions
let question1JSON = '{ "question":"What is the correct way to write a JavaScript array?" , ' +
    '"answer1": "var colors = 1 = (red), 2 = (green), 3 = (blue)", ' +
    '"answer2": "var colors = [red, green, blue]", ' +
    '"answer3": "var colors = (1:red, 2:green, 3:blue)", ' +
    '"answer4": "var colors = red, green, blue", ' +
    '"correct": "2"}';
let question2JSON = '{ "question":"Which event occurs when the user clicks on an HTML element?" , ' +
    '"answer1": "onmouseover", ' +
    '"answer2": "onchange", ' +
    '"answer3": "onclick", ' +
    '"answer4": "onmouseclick", ' +
    '"correct": "3"}';
let question3JSON = '{ "question":"Which operator is used to assign a value to a variable?" , ' +
    '"answer1": "=", ' +
    '"answer2": "-", ' +
    '"answer3": "*", ' +
    '"answer4": "X", ' +
    '"correct": "1"}';
let question4JSON = '{ "question":"How do you create a function in JavaScript?" , ' +
    '"answer1": "function = myFunction()", ' +
    '"answer2": "function:myFunction()", ' +
    '"answer3": "function myFunction()", ' +
    '"answer4": "myFunction.function()", ' +
    '"correct": "3"}';
let question5JSON = '{ "question":"How does a FOR loop start?" , ' +
    '"answer1": "for (i = 0; i <=5)", ' +
    '"answer2": "for i = 1 to 5", ' +
    '"answer3": "for (i <= 5; i++)", ' +
    '"answer4": "for (i = 0; i <= 5; i++)", ' +
    '"correct": "4"}';

// Shuffling the order of the questions
let questions = [JSON.parse(question1JSON), JSON.parse(question2JSON), JSON.parse(question3JSON), JSON.parse(question4JSON), JSON.parse(question5JSON)]
function shuffle(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}
shuffle(questions);
currentQuestion = 0;

function startGame() {
    score.textContent = "Score: " + currentScore;
    showQuestion();
    if (timeLeft > 0 ) {
    showTime();
    setInterval(showTime, 1000);
    }
}

function showQuestion() {
    if (currentQuestion == 5 && !gameOverCalled) {
        gameOver();
    }
    else {
    questionText.textContent = questions[currentQuestion].question;
    answers.children[0].textContent = questions[currentQuestion].answer1;
    answers.children[1].textContent = questions[currentQuestion].answer2;
    answers.children[2].textContent = questions[currentQuestion].answer3;
    answers.children[3].textContent = questions[currentQuestion].answer4;

    answers.children[0].addEventListener("click", answerChosen1)
    answers.children[1].addEventListener("click", answerChosen2)
    answers.children[2].addEventListener("click", answerChosen3)
    answers.children[3].addEventListener("click", answerChosen4)
    }
}

function answerChosen1() {
    var answerChosen = 1;
    if (answerChosen == questions[currentQuestion].correct)
    {
        rightChosen();
    }
    else {
        wrongChosen();
    }
}
function answerChosen2() {
    var answerChosen = 2;
    if (answerChosen == questions[currentQuestion].correct)
    {
        rightChosen();
    }
    else {
        wrongChosen();
    }
}
function answerChosen3() {
    var answerChosen = 3;
    if (answerChosen == questions[currentQuestion].correct)
    {
        rightChosen();
    }
    else {
        wrongChosen();
    }
}
function answerChosen4() {
    var answerChosen = 4;
    if (answerChosen == questions[currentQuestion].correct)
    {
        rightChosen();
    }
    else {
        wrongChosen();
    }
}

function rightChosen() {
    currentScore = currentScore + 10;
    score.textContent = "Score: " + currentScore;
    currentQuestion++;
    showQuestion();
}
function wrongChosen() {
    timeLeft = timeLeft - 5;
    currentQuestion++;
    showQuestion();
}

function gameOver() {
    gameOverCalled = true;
    currentScore = currentScore + timeLeft;   
    timeLeft = 0;
    finalScore = currentScore;
    score.textContent = "Score: " + finalScore;
    questionText.textContent = "Game Over! Refresh to play again!";
    timer.textContent = 'Timer: ' + 0;
    leaderboard();
}

function showTime() {
    if (timeLeft > 0) {
    timer.textContent = 'Timer: ' + timeLeft;
    timeLeft--;
    }
    else if (timeLeft <= 0 && !gameOverCalled)  {
        gameOver();
    }
}

function leaderboard() {
    var counter = 0;
    while (counter < leaderboardEntries.length) {
    
        if (finalScore < leaderboardEntries[counter].score) {
            counter++;
        }
        
        else {
            leaderboardEntries[counter].name = prompt("Congradulations! You earned a high score! Please enter your name for the leaderboard!");
            leaderboardEntries[counter].score = finalScore;
            counter = leaderboardEntries.length;
            displayScores();
        }
    
    }
}

let entry1 = '{ "name":"" , ' + '"score":""}';
let entry2 = '{ "name":"" , ' + '"score":""}';
let entry3 = '{ "name":"" , ' + '"score":""}';
let entry4 = '{ "name":"" , ' + '"score":""}';
let entry5 = '{ "name":"" , ' + '"score":""}';

let leaderboardEntries = [JSON.parse(entry1), JSON.parse(entry2), JSON.parse(entry3), JSON.parse(entry4), JSON.parse(entry5)]

displayScores();

function displayScores() {
    for (i = 0; i < leaderboardEntries.length; i++)
    leaderboardScores.children[i].textContent = leaderboardEntries[i].score + " - " + leaderboardEntries[i].name;
}
startButton.addEventListener("click", startGame);