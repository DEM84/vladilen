/*

<form class="create-user-form">
<label>
    Имя
    <input type="text" name="userName" placeholder="Введите ваше имя" />
</label>
<label>
    Пароль
    <input type="password" name="password" placeholder="Придумайте Пароль" />
</label>
<button type="submit">
    Подтвердить
</button>
</form>

*/

/*

// Способ 1

const body =
  '<form class="create-user-form"><label>Имя<input type="text" name="userName" placeholder="Введите ваше имя" /></label><label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль" /></label><button type="submit">Подтвердить</button></form>';

document.body.innerHTML = body;

*/

// Способ 2

let form = document.createElement("form");
document.body.append(form);
form.className = "create-user-form";

let firstLabel = document.createElement("label");
form.append(firstLabel);
firstLabel.append("Имя");

let firstInput = document.createElement("input");
firstLabel.append(firstInput);
firstInput.setAttribute("type", "text");
firstInput.setAttribute("name", "userName");
firstInput.setAttribute("placeholder", "Введите ваше имя");

let secondLabel = document.createElement("label");
form.append(secondLabel);
secondLabel.append("Пароль");

let secondInput = document.createElement("input");
secondLabel.append(secondInput);
secondInput.setAttribute("type", "password");
secondInput.setAttribute("name", "password");
secondInput.setAttribute("placeholder", "Придумайте Пароль");

let button = document.createElement("button");
form.append(button);
button.setAttribute("type", "submit");
button.append("Подтвердить");

//
