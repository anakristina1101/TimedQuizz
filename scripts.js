// What's left:
//need to get progress bar to function currently its static and get question flip to next question on click of next buttoon
// total correct answers 
// make prompts to notify if answer choices are right or wrong

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
//var answers = document.getElementById("answers");  
//var answerButtonElement = document.getElementById("answer-buttons");
var intro = document.getElementById("intro");
var timer = document.getElementById("progress");
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var optionD = document.getElementById("d");

// Question Variables and array

var myQuestions = [{
      question: "On which date does Halloween fall?",
      optionA: "October 1st",
      optionB: "October 31st",
      optionC: "The last friday in October",
      optionD: "When Friday the 13th appears in October",
      correct: "b",
      correctResponse:"Nice job, you are well on your way to some well earned candy!",
      incorrectResponse:"Halloween is always on October 31st",
      timedOut:"Com'mon did you not have a childhood?! Halloween is Oct. 31st!"

  },
  {
    question: "Where did the tradition of bobbing for apples originate?",
     optionA: "Ancient Rome",
     optionB: "16th Centry England",
     optionC: "Scotland in the 1400s",
     optionD: "1920's New York",
     correct: "a",
     correctResponse:"Look at you, you History Buff!",
     incorrectResponse:"Nope Nope Nope, Only Ancient Romans were cool enough to think this up!",
     timedOut:"We had time to travel Ancient Rome waiting on your answer!"

  },
  {
    question:"Count Dracula is based on a real person from history—what was his name?",
      optionA: "Bram Stoker",
      optionB: "Count Olaf",
      optionC: "Vlad Dracula",
      optionD: "Nosferatu",
      correct: "c",
      correctResponse:"Nice job, you are well on your way to some well earned candy!",
      incorrectResponse:"Close but not quite - Vlad Dracula was the real deal!",
      timedOut:"Vlad Dracula --context clues man LOL!"

  },
  {
    question:"What popular Halloween movie features 3 Salem witches that have come back from the dead to steal the life energy of children?",
     optionA: "Scream",
     optionB: "Witches",
     optionC: "The Nightmare Before Christmas",
     optionD: "Hocus Pocus",
     correct: "d",
     correctResponse:"Nice Job the Sanderson sister would never be able to catch you!",
     incorrectResponse:"It was Hocus Pocus, aka the best Halloween movie ever!",
     timedOut:"Hocus Pocus too many movies for you to focus!"

  },
  {
    question:"What is the phrase that children say when going door to door requesting candy Halloween night?",
    optionA: "I'm Hungry!",
    optionB: "Give me some sweets!",
    optionC: "Give me something good to eat",
    optionD: "Trick or Treat",
    correct: "d",
    correctResponse:"Trick or Treat, we see you have done this before.",
    incorrectResponse:" You can say this on any other day but not Halloween",
    timedOut:"Trick or Treat Smell my feet give me something good to eat!"

  },
  {
    question: "Which of these scary sets are traditionally mortal enemies?",
    optionA: "Witches and Goblins",
    optionB: "Trolls and Dragons",
    optionC: "Vampires and Werewolves",
    optionD: "Faries and Elves",
    correct: "c",
    correctResponse:"Trick or Treat, we see you have done this before.",
    incorrectResponse:" You can say this on any other day but not Halloween",
    timedOut:"Trick or Treat Smell my feet give me something good to eat!"

  },
  {
    question:
     "Which American city is famous for it's above ground cemetries?",
      optionA: "Orlando, FL",
      optionB: "New Orleans, LA",
      optionC: "Chicago, IL",
      optionD: "San Antonio,TX",
      correct: "b",
      correctResponse:"Trick or Treat, we see you have done this before.",
      incorrectResponse:" You can say this on any other day but not Halloween",
      timedOut:"Trick or Treat Smell my feet give me something good to eat"
  },
  {
    question:
      "What were Jack O’Lanterns carved from before pumpkins were used?",
      optionA: "Apples",
      optionB: "Turnips",
      optionC: "Potatoes",
      optionD: "Small boxes",
      correct: "b",
      correctResponse:"Trick or Treat, we see you have done this before.",
      incorrectResponse:" You can say this on any other day but not Halloween",
      timedOut:"Trick or Treat Smell my feet give me something good to eat"
  },
  {
    question:
      'Which vampire said, “Don’t be afraid. I’m going to give you the choice I never had?"',
      optionA: "Lestat from Interview with the Vampire ",
      optionB: "Erick from TrueBlood ",
      optionC: "Edward from Twilight",
      optionD: "Niclous from The Orignals",
      correct: "a",
      correctResponse:"Trick or Treat, we see you have done this before.",
      incorrectResponse:" You can say this on any other day but not Halloween",
      timedOut:"Trick or Treat Smell my feet give me something good to eat"
  },
  {
    question: "Which famouse book was written by Mary Shelley?",
    optionA: "Dracula",
    optionB: "Frankenstein", optionC: "Interview with the Vampire",
    optionD: "Sleepy Hallow",
    correct: "b",
    correctResponse:"Trick or Treat, we see you have done this before.",
    incorrectResponse:" You can say this on any other day but not Halloween",
    timedOut:"Trick or Treat Smell my feet give me something good to eat"
}
];

var previousQuestion = myQuestions.length - 1;
var currentQuestion = 0;

// Start quizz
startButton.addEventListener("click", startQuizz);

function startQuizz() {
  console.log("Started");
  startButton.classList.add("hide");
  intro.classList.add("hide");
  questionContainerElement.classList.remove("hide");

  setNextQuestion();
}
//next question to populate
nextButton.addEventListener("click", setNextQuestion);
 
function setNextQuestion() {
    console.log("next btn clicked");
  var q = myQuestions[currentQuestion];
 
  questionElement.innerText = q.question;
  optionA.innerHTML = q.optionA;
  optionB.innerHTML = q.optionB;
  optionC.innerHTML = q.optionC;
  optionD.innerHTML = q.optionD;

  function progress() {
    var timer = document.getElementById("progress");
    var width = 1;
    var id = setInterval(frame, 60);

    function frame() {
      if (count>= 100) {
        clearInterval(id);
      } else {
        width++;
        timer.style.width = width + "%";
      }
    }
  }
}

function checkAnswer(answer) {
if (answer == question[currentQuestion].correct){
    alert(questions[currentQuestion].correctResponse);{
        alert(question[currentQuestion].incorrectResponse);
    }
}
}
