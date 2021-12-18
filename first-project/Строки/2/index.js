const myName = "Дмитрий";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилена";
const reasonText = "так надо :D";
const numberOfMonth = 3;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. \n\nЯ хочу стать веб-разработчиком, потому что ${reasonText} До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
);

console.log(myInfoText);

console.log("длина строки", myInfoText.length);

console.log(
  "первый символ",
  myInfoText[0],
  "и последний",
  myInfoText[myInfoText.length - 1]
);
