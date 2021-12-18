let checkQuestionAnswer = (question, correctAnswer) => {
  let userAnswer = prompt(question).trim().toLowerCase();
  if (userAnswer === correctAnswer.toLowerCase()) {
    return "Ответ верный";
  } else {
    return "Ответ неверный";
  }
};

console.log(checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода"));
console.log(
  checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32")
);
console.log(
  checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Колибри")
);
