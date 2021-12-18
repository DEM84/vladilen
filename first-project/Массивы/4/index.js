const coffees = ["Latte", "Cappuccino", "Americano"];

let coffeeName = prompt("Поиск кофе по названию");

console.log("Название кофе", coffeeName);

let result = coffees.findIndex(
  (item) => item.toLowerCase() == coffeeName.toLowerCase()
);

console.log(result);

if (result >= 0) {
  alert(
    `Держите ваш любимый кофе ${coffees[result]}. Он ${
      result + 1
    }-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}
