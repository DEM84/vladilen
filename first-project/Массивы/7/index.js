const goals = [8, 1, 1, 3, 2, -1, 5];

// 1 и 2 (самый результативный и самые нерезультативные матчи)

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberOfGoals = goals[0];

goals.forEach((goalNumber, index) => {
  if (goalNumber > maxNumberOfGoals) {
    maxNumberOfGoals = goalNumber;
    maxNumberOfGoalsIndex = index;
  }
  if (goalNumber < minNumberOfGoals && goalNumber >= 0) {
    minNumberOfGoals = goalNumber;
  }
});

alert(
  `Самый результативный матч был под номером ${
    maxNumberOfGoalsIndex + 1
  }. В нем было забито ${maxNumberOfGoals} голов.`
);

const matchesWithMinNumberOfGoals = goals
  .map((goalNumber, index) =>
    goalNumber === minNumberOfGoals ? index + 1 : -1
  )
  .filter((goalNumber) => goalNumber > 0);

alert(
  `Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals.join(
    ", "
  )}. В каждом из них было забито по ${minNumberOfGoals} мячу.`
);

// 3 (количество голов за сезон)

let goalsSum = goals
  .filter((goalNumber) => goalNumber > 0)
  .reduce((a, b) => a + b);

alert(`Общее количество голов за сезон равно ${goalsSum}`);

// 4 (автоматические поражения)

let isAutomaticDefeat = "нет";

goals.forEach((goalNumber, index) => {
  if (goalNumber === -1) {
    isAutomaticDefeat = "да";
  }
});

alert(`Были автоматические поражения: ${isAutomaticDefeat}`);

// 5 (среднее количество голов за матч)

const averageNumberOfGoals =
  goalsSum / goals.filter((goalNumber) => goalNumber > 0).length;

alert(
  `Среднее количество голов за матч равно ${averageNumberOfGoals.toFixed(
    2
  )} (без учёта авто-поражений)`
);

// 6 (голы в порядке возрастания)

const sortedGoals = goals
  .slice()
  .sort((a, b) => a - b)
  .filter((goalNumber) => goalNumber > 0);

alert(`Голы в порядке возрастания: ${sortedGoals.join(", ")}`);
