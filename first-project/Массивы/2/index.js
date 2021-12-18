const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

let giveParcel = () => {
  let name = peopleWaiting[0];
  peopleWaiting.shift();
  let length = peopleWaiting.length;
  console.log(
    `${name} получил(а) посылку. В очереди осталось ${length} человек.`
  );
};

let leaveQueueWithoutParcel = () => {
  let name = peopleWaiting[peopleWaiting.length - 1];
  peopleWaiting.pop();
  console.log(`${name} не получил(а) посылку и ушел(ла) из очереди`);
};

giveParcel();
giveParcel();
giveParcel();

leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
leaveQueueWithoutParcel();
