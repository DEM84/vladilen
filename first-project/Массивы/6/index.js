let clientsEstimations = [];

let askClientToGiveEstimation = () => {
  let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  if (estimation > 0 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
};

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

let positiveEstimations = clientsEstimations.filter((num) => num > 5);

let negativeEstimations = clientsEstimations.filter((num) => num <= 5);

alert(
  `Всего положительных оценок: ${positiveEstimations.length}; Всего отрицательных оценок: ${negativeEstimations.length}`
);
