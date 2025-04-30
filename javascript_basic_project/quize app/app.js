const quizData = [
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Digital Ordinance Model", "Desktop Object Management"],
      correctAnswer: "Document Object Model"
    },
    {
      question: "Which method converts JSON to JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toJS()"],
      correctAnswer: "JSON.parse()"
    },
    {
      question: "Which keyword is used to declare constant in JavaScript?",
      options: ["let", "var", "const", "static"],
      correctAnswer: "const"
    },
    {
      question: "Which of these is a JavaScript data type?",
      options: ["float", "double", "symbol", "character"],
      correctAnswer: "symbol"
    },
    {
      question: "What is the output of 2 + '2' in JavaScript?",
      options: ["4", "22", "NaN", "undefined"],
      correctAnswer: "22"
    }
  ];

  const quesction = document.getElementById("quesction");
  const ansbox = document.querySelector(".ansbox")
  const nextButton = document.getElementById("nextbtn")
  let currentIndex =0


