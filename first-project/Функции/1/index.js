function getName1(name) {
  return `Имя равно ${name}`;
}

let getName2 = function (name) {
  return `Имя равно ${name}`;
};

let getName3 = (name) => {
  return `Имя равно ${name}`;
};

console.log(getName1("Петя"));

console.log(getName2("Вася"));

console.log(getName3("Лёша"));
