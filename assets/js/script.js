//variables to access the containers where the questions and answer buttons will appear
var quizContainer = document.getElementById("questioncontainer");
var answerContainer = document.getElementById("answersection");
var startButton = document.getElementById("start-btn")
var instruction = document.getElementById("begininginstruction")

// this keeps track of the timer
var timer;
//this keeps track of the the current time that we are going though
var count;
//array for the questiosn that will be asked along with a correct answer
var jsQuestions = [ {
    question: "What type value is true and false?",
    answers: {
        1: "String",
        2: "Operators",
        3: "Function",
        4: "Boolean"
        },
        correctAnswer: "4"
    },
        {
            question: "Which of the following gives your code functionality?",
            answers: {
                1: "String",
                2: "Operators",
                3: "Function",
                4: "Boolean"
            },
        correctAnswer: "3"
        }
    ];

  
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

function renderQuestion(question) {

}

//function to begin the game which references the startTimer function.
function startQuiz() {
    startTimer();
    renderQuestion();
    startButton.style.display = "none";
    instruction.style.display = "none";
    quizContainer.classList.remove("hide");
    answerContainer.style.display = enabled;
}

//When I click the button that has the "start" id associated with it, it will wait for a click and begin the countdown.
document.getElementById("start-btn").addEventListener("click", startQuiz);



/*
    ----Pseudo to display quiz question----
    1. when the start quiz button is pressed start timer[c]
    2. questions should be shown in the quiz container
        a. maybe "push" objects to div container
    3. buttons should appear with corresponding answers inside them
        a. create buttons, target innerHTML and append child to the answersection div
*/