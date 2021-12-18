const getKiller = (suspectInfo, deadPeople) => {
  let killerName = "неизвестен";

  Object.values(suspectInfo).forEach((element, index) => {
    let isGoodMan = false;

    deadPeople.forEach((el) => {
      if (!element.includes(el)) {
        isGoodMan = true;
      }
    });

    if (!isGoodMan) {
      killerName = Object.keys(suspectInfo)[index];
    }
  });
  console.log(`Убийца ${killerName}`);
  return killerName;
};

getKiller(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
); // Убийца James

getKiller(
  {
    Brad: [],
    Megan: ["Ben", "Kevin"],
    Finn: [],
  },
  ["Ben"]
); // Убийца Megan

getKiller(
  {
    Дима: ["Веня", "Коля"],
    Коля: ["Вася", "Дима", "Олег"],
    Веня: ["Саша", "Петя", "Жора"],
  },
  ["Петя", "Дима"]
); // Убийцы нет
