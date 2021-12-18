let correctAnswers = 0,
  incorrectAnswers = 0;

const result1 = Number(prompt("Сколько будет 2 + 2?"));
if (result1 === 2 + 2) {
  correctAnswers += 1;
  alert("Ответ верный");
} else {
  incorrectAnswers += 1;
  alert("Ответ неверный");
}

const result2 = Number(prompt("Сколько будет 2 * 2?"));
if (result2 === 2 * 2) {
  correctAnswers += 1;
  alert("Ответ верный");
} else {
  incorrectAnswers += 1;
  alert("Ответ неверный");
}

const result3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  )
);
if (result3 === 5 - 3 - 1) {
  correctAnswers += 1;
  alert("Ответ верный");
} else {
  incorrectAnswers += 1;
  alert("Ответ неверный");
}

const result4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  )
);
if (result4 === 10 - 2 - 1 + 5) {
  correctAnswers += 1;
  alert("Ответ верный");
} else {
  incorrectAnswers += 1;
  alert("Ответ неверный");
}

const result5 = Number(prompt("Сколько будет 2 + 2 * 2?"));
if (result5 === 2 + 2 * 2) {
  correctAnswers += 1;
  alert("Ответ верный");
} else {
  incorrectAnswers += 1;
  alert("Ответ неверный");
}

if (correctAnswers === 5) {
  alert("Конец теста. Вы не сделали ни одной ошибки!");
} else if (incorrectAnswers === 5) {
  alert("Конец теста. Все ответы были неправильными :(");
} else {
  alert(
    `Конец теста! Правильных ответов ${correctAnswers}; Неправильных ответов ${incorrectAnswers}.`
  );
}
