const addDays = (date, days = 1) =>
  new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

let data = new Date(2021, 9, 25);

console.log("исходная дата", data);
console.log("плюс 10 дней", addDays(data, 10));
