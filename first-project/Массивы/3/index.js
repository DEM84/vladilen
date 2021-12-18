const numbers = [10, 4, 100, -5, 54, 2];

let result = numbers.reduce((sum, current) => sum + Math.pow(current, 3), 0);

console.log("result", result);
