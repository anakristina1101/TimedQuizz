var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var intro = document.getElementById("intro")


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
        question: "Where did the tradition of bobbing for apples originate??",
        answers: {
          a: "Ancient Rome",
          b: "16th Centry England",
          c: "Scotland in the 1400s",
          d: "1920's New York"
        },
        correctAnswer: "a"
    },
    {
        question: "Count Dracula is based on a real person from history—what was his name?",
        answers: {
          a: "Bram Stoker",
          b: "Count Olaf",
          c: "Vlad Dracula",
          d: "Nosferatu"
        },
        correctAnswer: "c"
    },
    {
        question: "On which date doe Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d: "When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
    {
        question: "On which date does Hallowe’en fall?",
        answers: {
          a: "October 1st",
          b: "October 31st",
          c: "The last friday in October",
          d:"When Friday the 13th appears in October"
        },
        correctAnswer: "b"
    },
startButton.addEventListener( "click", startQuizz)

function startQuizz(){
    
console.log("Started") 
startButton.classList.add("hide")
intro.classList.add("hide")



}

function setNextQuestion(){

}

function selectAnswer(){

}