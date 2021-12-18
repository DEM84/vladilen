let health = prompt('Введите число параметра "здоровье" для персонажа');
console.log("health start", health);

if (health < 0 || !health) {
  alert('Параметр "здоровье" должен быть больше нуля!');
  console.log("health if", health);
} else {
  alert(`Параметр "здоровье" равен ${health}`);
  console.log("health else", health);
}
console.log("health end", health);
