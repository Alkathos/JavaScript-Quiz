//variables for our DOM elements
var quizContainer = document.getElementById("questioncontainer");
var answerContainer = document.getElementById("answersection");
var startButton = document.getElementById("start-btn");
var instruction = document.getElementById("begininginstruction");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answergrid");
var quizTimer = document.getElementById("timer");
var startButton = document.getElementById("start-btn");

/*----------global variables---------*/
var currentQuestionIndex = 0;
var timer;
var count;
var time = jsQuestions.length * 15;

//When I click the button that has the "start" id associated with it, it will wait for a click and begin the countdown.
startButton.addEventListener("click", startQuiz);
  
//this functions tells the browser what happens when the timer reaches 0
function quizOver () {
    
}


//this begins the countdown by grabbing the variables timer and count. Sets the count to 80 and decreases the count by 1 second
function startTimer () {
    count = 80;
    timer = setInterval(function() {
        count--;
        if(count<0) {
            quizOver();
            clearInterval(timer);
        } else {
            quizTimer.textContent=count;
        }
    }, 1000);
}


function getQuestion() {
    // get current question object from array
    var currentQuestion = jsQuestions[currentQuestionIndex];
  
    // update title with current question  
    questionElement.textContent = currentQuestion.text;
  
    // clear out any old question choices
    answerButtonsElement.innerHTML = "";
  
    // loop over choices
    currentQuestion.text.forEach(function(text, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", text);
  
      choiceNode.textContent = i + 1 + ". " + choice;
  
      // attach click event listener to each choice
      choiceNode.onclick = questionClick;
  
      // display on the page
      answerButtonsElement.appendChild(choiceNode);
    });
  }

  function questionClick() {
    // check if user guessed wrong
    if (this.value !== jsQuestions[currentQuestionIndex].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      quizTimer.textContent = time;
  
  
      feedbackEl.textContent = "Wrong!";
    } else {

      feedbackEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

//function to begin the game which references the startTimer function.
function startQuiz() {
    startTimer();
    startButton.style.display = "none";
    instruction.style.display = "none";
    quizContainer.classList.remove("hide");
    answerContainer.classList.remove("hide");
    getQuestion();
}

