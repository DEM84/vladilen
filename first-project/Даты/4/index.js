const allowVisa = (arr) => {
  const dateTransformer = (date) =>
    new Date(
      `${date.split(".")[2]}-${date.split(".")[1]}-${date.split(".")[0]}`
    ).getTime();

  let newArr = [];

  arr.forEach((el) => {
    if (
      el.criminalRecord === false &&
      dateTransformer(el.passportExpiration) > Date.now()
    ) {
      newArr.push(el);
    }
  });

  return newArr;
};

const peopleWithVisa = [
  {
    firstName: "Stasia",
    lastName: "Ward",
    criminalRecord: true,
    passportExpiration: "19.06.2023",
  },
  {
    firstName: "Elliot",
    lastName: "Baker",
    criminalRecord: false,
    passportExpiration: "04.06.2021",
  },
  {
    firstName: "Leighann",
    lastName: "Scott",
    criminalRecord: true,
    passportExpiration: "31.07.2022",
  },
  {
    firstName: "Nick",
    lastName: "Pop",
    criminalRecord: false,
    passportExpiration: "31.12.2021",
  },
];

const result = allowVisa(peopleWithVisa);

console.log("result", result);
