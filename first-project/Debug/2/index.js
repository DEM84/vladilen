const temperatureInCelsius = Number(
  prompt("Введите температуру в градусах Цельсия")
);
console.log("temperatureInCelsius на старте", temperatureInCelsius);

if (temperatureInCelsius === 0) {
  console.log("temperatureInCelsius if", temperatureInCelsius);
  alert("0 градусов по Цельсию - это температура замерзания воды");
} else if (temperatureInCelsius > 0) {
  console.log("temperatureInCelsius else", temperatureInCelsius);
  alert(
    "Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже"
  );
}

const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
console.log("temperatureInFahrenheit", temperatureInFahrenheit);
console.log("temperatureInCelsius в итоге", temperatureInCelsius);
alert(
  `${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
);
