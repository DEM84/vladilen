let age = 37;
console.log(Number(age), String(age), Boolean(age));

let name = "Дмитрий";
console.log(Number(name), String(name), Boolean(name));

let isMan = true;
console.log(Number(isMan), String(isMan), Boolean(isMan));

let mySkills = null;
console.log(Number(mySkills), String(mySkills), Boolean(mySkills));

let myFuture = undefined;
console.log(Number(myFuture), String(myFuture), Boolean(myFuture));

let fullStack = { frontEnd: true, backEnd: true };
console.log(Number(fullStack), String(fullStack), Boolean(fullStack));

let wannaCash = 1000000n;
console.log(Number(wannaCash), String(wannaCash), Boolean(wannaCash));

let itSymbol = Symbol("id");
console.log(
  "Cannot convert a Symbol value to a number",
  String(itSymbol),
  Boolean(itSymbol)
);
