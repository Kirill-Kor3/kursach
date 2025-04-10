const questions = [
  {
    question:
      'Почему игнорирование обработки ошибок — плохая практика в программировании?',
    options: [
      '1. Ошибки сами исчезают со временем',
      '2. Это приводит к ненужным комментариям',
      '3. Это может привести к непредсказуемому поведению программы',
    ],
    answer: '3. Это может привести к непредсказуемому поведению программы',
  },
  {
    question:
      'Что может произойти при неправильной работе с памятью (например, в C/C++)?',
    options: [
      '1. Увеличится скорость выполнения',
      '2. Может произойти утечка памяти или крах программы',
      '3. Программа станет безопаснее',
    ],
    answer: '2. Может произойти утечка памяти или крах программы',
  },
  {
    question:
      'Почему важно использовать систему контроля версий (например, Git)?',
    options: [
      '1. Для отслеживания изменений и предотвращения потери данных',
      '2. Для ускорения компиляции',
      '3. Чтобы хранить проект на сервере',
    ],
    answer: '1. Для отслеживания изменений и предотвращения потери данных',
  },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.getElementById('start-screen').classList.add('hidden');
  document.getElementById('quiz-screen').classList.remove('hidden');
  loadQuestion();
}

function loadQuestion() {
  const ans = document.querySelector('body');
  ans.style.backgroundColor = '#FFF8F0';
  let question = questions[currentQuestionIndex];
  document.getElementById('question-title').innerText = question.question;
  let optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  question.options.forEach((option) => {
    let button = document.createElement('button');
    button.innerText = option;
    button.onclick = () => selectAnswer(option);
    optionsDiv.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer === questions[currentQuestionIndex].answer) {
    score++;
    const ans = document.querySelector('body');
    ans.style.backgroundColor = '#A5E9C6';
  } else if (answer !== questions[currentQuestionIndex].answer) {
    const ans = document.querySelector('body');
    ans.style.backgroundColor = '#E9A5A5';
  }
  document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById('next-btn').classList.add('hidden');
  } else {
    showResult();
  }
}

function showResult() {
  const ans = document.querySelector('body');
  ans.style.backgroundColor = '#FFF8F0';
  document.getElementById('quiz-screen').classList.add('hidden');
  document.getElementById('result-screen').classList.remove('hidden');
  document.getElementById(
    'result-text'
  ).innerText = `Вы набрали: ${score} из ${questions.length}`;
}

function restartQuiz() {
  const ans = document.querySelector('body');
  ans.style.backgroundColor = '#FFF8F0';
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('result-screen').classList.add('hidden');
  document.getElementById('start-screen').classList.remove('hidden');
}
