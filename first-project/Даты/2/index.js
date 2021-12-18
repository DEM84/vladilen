const getDaysBeforeBirthday = (nextBirthdayDate) => {
  let result = Math.ceil(
    // имхо, тут логичнее, чем Math.round()
    convertMsToDays(nextBirthdayDate.getTime() - Date.now())
  );

  if (result === -0) {
    return "с днём рождения!";
  }
  if (result < 0) {
    return "введите будущую дату";
  }

  return `осталось дней: ${result}`;
};

const convertMsToDays = (date) => {
  return date / 1000 / 60 / 60 / 24;
};

let myBirthday = new Date(2022, 1, 3);

console.log(getDaysBeforeBirthday(myBirthday));

//

// console.log(new Date().getFullYear() - 1992);
