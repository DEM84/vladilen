let userText = prompt("Введите текст").trim();

let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

alert(
  `Результат: ${userText.slice(0, indexOfWord).trim()} или же ${userText
    .slice(indexOfWord)
    .trim()} \n\n \/\/ смотря что подразумевалось под итоговой обрезанной строкой`
);
