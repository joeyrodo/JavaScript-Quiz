var questionText = document.getElementById('question-text');
var timer = document.getElementById('timer');
var score = document.getElementById('score');
var answers = document.getElementById('answers');
var leaderboardScores = document.getElementById('leaderboard-scores');

const startButton = document.getElementById('start-button');
var timeLeft = 30;
var currentScore = 0;

// Creating questions
let question1JSON = '{ "question":"q1" , ' +
    '"answer1":"q1a1", ' +
    '"answer2":"q1a2", ' +
    '"answer3":"q1a3", ' +
    '"answer4":"q1a4", ' +
    '"correct": "1"}';
let question2JSON = '{ "question":"q2" , ' +
    '"answer1":"q2a1", ' +
    '"answer2":"q2a2", ' +
    '"answer3":"q2a3", ' +
    '"answer4":"q2a4", ' +
    '"correct": "1"}';
let question3JSON = '{ "question":"q3" , ' +
    '"answer1":"q3a1", ' +
    '"answer2":"q3a2", ' +
    '"answer3":"q3a3", ' +
    '"answer4":"q3a4", ' +
    '"correct": "1"}';
let question4JSON = '{ "question":"q4" , ' +
    '"answer1":"q4a1", ' +
    '"answer2":"q4a2", ' +
    '"answer3":"q4a3", ' +
    '"answer4":"q4a4", ' +
    '"correct": "1"}';
let question5JSON = '{ "question":"q5" , ' +
    '"answer1":"q5a1", ' +
    '"answer2":"q5a2", ' +
    '"answer3":"q5a3", ' +
    '"answer4":"q5a4", ' +
    '"correct": "1"}';

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
    if (currentQuestion == 5) {
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
    answers.children[0].textContent = "right answer chosen!";
    currentScore = currentScore + 10;
    score.textContent = "Score: " + currentScore;
    currentQuestion++;
    showQuestion();
}
function wrongChosen() {
    answers.children[0].textContent = "wrong answer chosen!";
    timeLeft = timeLeft - 5;
    currentQuestion++;
    showQuestion();
}

function gameOver() {
    timeLeft = 0;
    questionText.textContent = "Game Over!";
    timer.textContent = 'Timer: ' + 0;
}

function showTime() {
    timer.textContent = 'Timer: ' + timeLeft;
    timeLeft--;
    if (timeLeft <= -1) {
        gameOver();
    }
}


startButton.addEventListener("click", startGame);