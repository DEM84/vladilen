let userString = prompt("Введите текст для обрезки").trim();

let startSliceIndex = prompt(
  "Введите индекс, с которого нужно начать обрезку строки"
).trim();

let endSliceIndex = prompt(
  "Введите индекс, которым нужно закончить обрезку строки"
).trim();

alert(`Результат: ${userString.slice(startSliceIndex, endSliceIndex)}`);
