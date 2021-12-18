let userName = prompt("Введите ваше имя");
let userAge = prompt("Сколько вам лет?");

userName = userName.toLowerCase().trim();
userAge = Number(userAge);

alert(`Вас зовут ${userName} и вам ${userAge} лет`);
