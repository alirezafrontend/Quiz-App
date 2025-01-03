const elements = {
  configContainer: document.querySelector(".config-container"),
  quizContainer: document.querySelector(".quiz-container"),
  answerOptions: document.querySelector(".answer-options"),
  nextQuestionBtn: document.querySelector(".next-question-btn"),
  questionStatus: document.querySelector(".question-status"),
  timerDisplay: document.querySelector(".timer-duration"),
  resultContainer: document.querySelector(".result-container"),
};

const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "Javascript";
let numberOfQuestions = 3;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;
let disableSelection = false;

const showQuizResult = () => {
  clearInterval(timer);
  elements.resultContainer.style.display = "block";
  elements.quizContainer.style.display = "none";

  const resultText = `شما به <b>${correctAnswersCount}</b> از <b>${numberOfQuestions}</b> سوال پاسخ صحیح دادید`;
  elements.resultContainer.querySelector(".result-message").innerHTML =
    resultText;
};

const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  elements.timerDisplay.textContent = `${currentTime}`;
};

const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    elements.timerDisplay.textContent = `${currentTime}`;

    if (currentTime <= 0) {
      clearInterval(timer);
      disableSelection = true;
      elements.nextQuestionBtn.style.visibility = "visible";
      elements.quizContainer.querySelector(".quiz-timer").style.background =
        "#c31402";
      highlightCorrectAnswer();
      disableAnswerOptions();
    }
  }, 1000);
};

const getRandomQuestion = () => {
  const categoryQuestions =
    questions.find(
      (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
    )?.questions || [];

  if (
    questionsIndexHistory.length >=
    Math.min(numberOfQuestions, categoryQuestions.length)
  ) {
    return showQuizResult();
  }

  const availableQuestions = categoryQuestions.filter(
    (_, index) => !questionsIndexHistory.includes(index)
  );
  const randomQuestion =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
};

const highlightCorrectAnswer = () => {
  const correctOption =
    elements.answerOptions.querySelectorAll(".answer-option")[
      currentQuestion.correctAnswer
    ];
  correctOption.classList.add("correct");
  correctOption.insertAdjacentHTML(
    "beforeend",
    `<span class="material-symbols-rounded">check_circle</span>`
  );
};

const handleAnswer = (option, answerIndex) => {
  if (disableSelection) return;
  clearInterval(timer);
  disableSelection = true;

  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");
  !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

  option.insertAdjacentHTML(
    "beforeend",
    `<span class="material-symbols-rounded">${
      isCorrect ? "check_circle" : "cancel"
    }</span>`
  );
  disableAnswerOptions();

  elements.nextQuestionBtn.style.visibility = "visible";
};

const disableAnswerOptions = () => {
  elements.answerOptions
    .querySelectorAll(".answer-option")
    .forEach((option) => {
      option.style.pointerEvents = "none";
    });
};

const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return;
  disableSelection = false;

  resetTimer();
  startTimer();

  elements.nextQuestionBtn.style.visibility = "hidden";
  elements.quizContainer.querySelector(".quiz-timer").style.background =
    "#32313C";
  elements.quizContainer.querySelector(".question-text").textContent =
    currentQuestion.question;
  elements.questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> از <b>${numberOfQuestions}</b> سوال`;
  elements.answerOptions.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    elements.answerOptions.append(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
};

const startQuiz = () => {
  elements.configContainer.style.display = "none";
  elements.quizContainer.style.display = "block";

  quizCategory = elements.configContainer.querySelector(
    ".category-option.active"
  ).textContent;
  numberOfQuestions = parseInt(
    elements.configContainer.querySelector(".question-option.active")
      .textContent
  );

  renderQuestion();
};

elements.configContainer
  .querySelectorAll(".category-option, .question-option")
  .forEach((option) => {
    option.addEventListener("click", () => {
      option.parentNode.querySelector(".active").classList.remove("active");
      option.classList.add("active");
    });
  });

const resetQuiz = () => {
  resetTimer();
  correctAnswersCount = 0;
  questionsIndexHistory.length = 0;
  elements.configContainer.style.display = "block";
  elements.resultContainer.style.display = "none";
};

elements.nextQuestionBtn.addEventListener("click", renderQuestion);
elements.resultContainer
  .querySelector(".try-again-btn")
  .addEventListener("click", resetQuiz);
elements.configContainer
  .querySelector(".start-quiz-btn")
  .addEventListener("click", startQuiz);
