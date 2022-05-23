class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.index = 0;
    }
    getQuestionByIndex() {
      return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
      let question = this.getQuestionByIndex();
      if (question.isCorrectAnswer(answer)) {
        this.score++;
      }
      this.index++;
    }
    isEnded() {
      return this.index === this.questions.length;
    }
  }
  
  class Question {
    constructor(questionText, choices, answer) {
      this.text = questionText;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
      return this.answer === selectedChoice;
    }
  }
  
  let questions = [
    new Question(
      "How do you create a function in JavaSript?",
      ["function:myFunction()", "function=myFunction()", "function myFunction()", "None of these"],
      "function myFunction()"
    ),
    new Question(
      "JavaScript Supports?",
      ["Functions", "XHTML", "CSS", "HTML"],
      "Functions"
    ),
    new Question(
      "How do you round the number 5.35 in JS?",
      ["round(5.35)", "rnd(5.35)", "Math.round(5.35)", "Math.rnd(5.35)"],
      "Math.round(5.35)"
    ),
    new Question(
      "Which language got maximum follwers?",
      ["JavaScript", "Java", "Phython", "Go"],
      "JavaScript"
    ),
    new Question(
      "How do you declare a JavaScript variable?",
      ["var carName", "v carName", "Variable carName", "None"],
      "var carName"
    ),
    new Question(
      "Which operator is used to assign a value to a variable?",
      ["=", "-", "*", "X"],
      "="
    ),
    new Question(
      "Which event occurs when the user clicks on an HTML element?",
      ["onclick", "onmouseover", "onchange", "onmouseclick"],
      "onclick"
    ),
    new Question(
      "What does JSON stand for ?",
      [
        "Java Simple Object Notation",
        "JavaScript Object Notation",
        "Java Semi Object Notation",
        "None of the above",
      ],
      "JavaScript Object Notation"
    ),
  ];
  
  function loadQuestions() {
    if (quiz.isEnded()) {
      showFinalScores();
      return;
    }
  
    let currentQuestion = quiz.getQuestionByIndex();
    let questionElement = document.getElementById("question"); //<p id="question"></p>
    questionElement.innerHTML = currentQuestion.text;
  
    let displayedChoices = currentQuestion.choices;
    for (let i = 0; i < displayedChoices.length; i++) {
      let eachChoiceElement = document.getElementById("choice" + i); //<span id="choice0"></span
      eachChoiceElement.innerHTML = displayedChoices[i];
  
      let eachChoiceBtn = document.getElementById("btn" + i); //<button id="btn0"></button>
      eachChoiceBtn.onclick = function () {
        quiz.checkForCorrectAnswer(displayedChoices[i]); // Verification, scoring and incrementing the question index
        loadQuestions();
      };
    }
  
    showProgress();
  }
  
  let quiz = new Quiz(questions);
  loadQuestions();
  
  function showFinalScores() {
    let resPercent = (quiz.score / questions.length) * 100;
    let scoresHTML = `
          <h1>Results... </h1>
          <h2 id='score'>Your Score is :- ${quiz.score} </h2>
          <h2> And overall percentage is :- ${resPercent}% </h2>
          <h1>Congratulations!!!</h1>
      `;
    let quizCanvas = document.getElementById("quiz");
    quizCanvas.innerHTML = scoresHTML;
  }
  
  function showProgress() {
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
  }