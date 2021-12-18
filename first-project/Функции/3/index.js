let getDivisors = (number) => {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!");
  } else {
    let result = 0;
    for (let i = 0; i <= number; i++) {
      if (number % i === 0) {
        result += 1;
      }
    }
    return result;
  }
};

console.log("getDivisors", getDivisors(4));
console.log("getDivisors", getDivisors(5));
console.log("getDivisors", getDivisors(12));
console.log("getDivisors", getDivisors(30));
