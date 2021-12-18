let getSumOfNumbers = (number, type = "odd") => {
  if (type === "odd") {
    let result = 0;
    for (let i = 1; i <= number; i += 2) {
      console.log("result and i odd", result, i);
      result = result + i;
    }
    return result;
  } else if (type === "even") {
    let result = 0;
    for (let i = 0; i <= number; i += 2) {
      console.log("result and i even", result, i);
      result = result + i;
    }
    return result;
  } else if (type === "") {
    let result = 0;
    for (let i = 0; i <= number; i += 1) {
      console.log("result and i even", result, i);
      result = result + i;
    }
    return result;
  }
};

console.log("getSumOfNumbers odd", getSumOfNumbers(10, "odd"));
console.log("getSumOfNumbers even", getSumOfNumbers(10, "even"));
console.log("getSumOfNumbers null", getSumOfNumbers(10, ""));
