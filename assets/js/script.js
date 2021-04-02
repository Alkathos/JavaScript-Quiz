//variables for our DOM elements
var quizContainer = document.getElementById("questioncontainer");
var answerContainer = document.getElementById("answersection");
var startButton = document.getElementById("start-btn");
var instruction = document.getElementById("begininginstruction");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answergrid");

/*----------global variables---------*/
var currentQuestionIndex;
var timer;
var count;

/*----------questions---------*/
var jsQuestions = [ {
    question: "What data type is true and false?",
    choices: ["Boolean", "Variable", "Operator", "String"],
    answer: "Boolean"
}];


  
//this functions tells the browser what happens when the timer reaches 0
function quizOver () {
    
}


//this begins the countdown by grabbing the variables timer and count. Sets the count to 80 and decreases the count by the timer interval
function startTimer () {
    //initialize the count at 80
    count = 80;
    //this will tell the browser to start reducing the timer by 1sec(1000ms)
    timer = setInterval(function() {
        count--;
        if(count===0) {
            quizOver();
            clearInterval(timer);
        } else {
            document.getElementById("timer").textContent=count;
        }
    }, 1000);
}

function showNextQuestion(question) {
   
}

function renderQuestion(question) {
    questionElement.innerText = jsQuestions.question;
}

//function to begin the game which references the startTimer function.
function startQuiz() {
    startTimer();
    startButton.style.display = "none";
    instruction.style.display = "none";
    quizContainer.classList.remove("hide");
    currentQuestionIndex = 0;
    answerContainer.classList.remove("hide");
    renderQuestion();
}

//When I click the button that has the "start" id associated with it, it will wait for a click and begin the countdown.
document.getElementById("start-btn").addEventListener("click", startQuiz);