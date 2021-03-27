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

//this variable will hold a random question that the user will have to answer
var questions    
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

//function to begin the game which references the startTimer function.
function startQuiz() {
    questions=jsQuestions[Math.floor(Math.random()*jsQuestions.length)];
    document.createElement("button");

    startTimer();
}

//When I click the button that has the "start" id associated with it, it will wait for a click and begin the countdown.
document.getElementById("start").addEventListener("click", startQuiz);