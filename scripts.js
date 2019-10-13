///need to get progress bar to functin and get questions to populat in the question div right now it just says "question"

var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var intro = document.getElementById("intro");
var timer = document.getElementById("progress");

startButton.addEventListener("click", startQuizz);

function startQuizz() {
  console.log("Started");
  startButton.classList.add("hide");
  intro.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}
next - Button.addEventListener("click", setNextQuestion);

function setNextQuestion() {
  showQuestion(question[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  function progress() {
    var timer = document.getElementById("progress");
    var width = 1;
    var id = setInterval(frame, 60);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        timer.style.width = width + "%";
      }
    }
  }
}

//function startQuizz(){

function selectAnswer() {}

var myQuestions = [
  {
    question: "On which date does Halloween fall?",
    answers: {
      a: "October 1st",
      b: "October 31st",
      c: "The last friday in October",
      d: "When Friday the 13th appears in October"
    },
    correctAnswer: "b"
  },
  {
    question: "Where did the tradition of bobbing for apples originate?",
    answers: {
      a: "Ancient Rome",
      b: "16th Centry England",
      c: "Scotland in the 1400s",
      d: "1920's New York"
    },
    correctAnswer: "a"
  },
  {
    question:
      "Count Dracula is based on a real person from history—what was his name?",
    answers: {
      a: "Bram Stoker",
      b: "Count Olaf",
      c: "Vlad Dracula",
      d: "Nosferatu"
    },
    correctAnswer: "c"
  },
  {
    question:
      "What popular Halloween movie features 3 Salem witches that have come back from the dead to steal the life energy of children?",
    answers: {
      a: "Scream",
      b: "Witches",
      c: "The Nightmare Before Christmas",
      d: "Hocus Pocus"
    },
    correctAnswer: "d"
  },
  {
    question:
      "What is the phrase that children say when going door to door requesting candy Halloween night?",
    answers: {
      a: "I'm Hungry!",
      b: "Give me some sweets!",
      c: "Give me something good to eat",
      d: "Trick or Treat"
    },
    correctAnswer: "d"
  },
  {
    question: "Which of these scary sets are traditionally mortal enemies?",
    answers: {
      a: "Witches and Goblins",
      b: "Trolls and Dragons",
      c: "Vampires and Werewolves",
      d: "Faries and Elves"
    },
    correctAnswer: "c"
  },
  {
    question: "Which American city is famous for it's above ground cemetries?",
    answers: {
      a: "Orlando, FL",
      b: "New Orleans, LA",
      c: "Chicago, IL",
      d: "San Antonio,TX"
    },
    correctAnswer: "b"
  },
  {
    question:
      "What were Jack O’Lanterns carved from before pumpkins were used?",
    answers: {
      a: "Apples",
      b: "Turnips",
      c: "Potatoes",
      d: "Small boxes"
    },
    correctAnswer: "b"
  },
  {
    question:
      'Which vampire said, “Don’t be afraid. I’m going to give you the choice I never had?"',
    answers: {
      a: "Lestat from Interview with the Vampire ",
      b: "Erick from TrueBlood ",
      c: "Edward from Twilight",
      d: "Niclous from The Orignals"
    },
    correctAnswer: "a"
  },
  {
    question: "Which famouse book was written by Mary Shelley?",
    answers: {
      a: "Dracula",
      b: "Frankenstein",
      c: "Interview with the Vampire",
      d: "Sleepy Hallow"
    },
    correctAnswer: "b"
  }
];
