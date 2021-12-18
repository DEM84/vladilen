const giveTalonsInOrder = (patients, orders) => {
  orders.forEach((el, index) => {
    patients[el - 1].order = index;
  });

  patients.sort((a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    if (a.order < b.order) {
      return -1;
    }
  });

  patients.forEach((element) => {
    delete element.order;
  });

  return patients;
};

const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

const ordersArr = [4, 2, 1, 3];

const result = giveTalonsInOrder(people, ordersArr);

console.log("result", result);

/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/
