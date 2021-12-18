const getMathResult = (expression) => {
  let cleanArr = expression
    .map((el) => {
      if (
        el === ">" ||
        el === "<" ||
        el === "=" ||
        el === "+" ||
        el === "-" ||
        el === "*" ||
        el === "/"
      ) {
        return el;
      } else if (Number(el)) {
        return Number(el);
      }
    })
    .filter((el) => el);

  if (cleanArr.length < 3) {
    return "ошибка";
  } else if (cleanArr.length > 3) {
    cleanArr = cleanArr.slice(0, 3);
  }

  let a = cleanArr[0];
  let b = cleanArr[2];
  let c = cleanArr[1];

  switch (c) {
    case ">":
      return a > b;
      break;
    case "<":
      return a < b;
      break;
    case "=":
      return (a = b);
      break;
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    case "/":
      return a / b;
      break;
  }
};

let final = getMathResult(["100", "hello", "javascript", , "help200", "+", 4]);

console.log("final", final);
