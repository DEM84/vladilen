const password = prompt("Введите пароль").trim();
let validLength = false;
let validNumber = false;
let validChar = false;

if (password.length >= 3 && password.length <= 20) {
  validLength = true;
}

for (let i = 0; i < password.length; i++) {
  if ((password[i] = Number(password[i]))) {
    validNumber = true;
  }
}

for (let i = 0; i < password.length; i++) {
  if (password[i] !== password[i].toLowerCase()) {
    validChar = true;
  }
}

if (validLength === true && validNumber === true && validChar === true) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert(
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз."
  );
}
