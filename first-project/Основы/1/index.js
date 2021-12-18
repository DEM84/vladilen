let existedUserLogin = "the_best_user";
let existedUserPassword = "12345678";

let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль").trim();

console.log(userLogin, userPassword);

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно!");
}
