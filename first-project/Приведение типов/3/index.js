console.log(Number(console.log), String(console.log), Boolean(console.log));

console.log(
  Number({ name: "Maxim" }),
  String({ name: "Maxim" }),
  Boolean({ name: "Maxim" })
);

console.log(String(Symbol("key")), Boolean(Symbol("key")));

console.log(Number(Number), String(Number), Boolean(Number));

console.log(Number(""), String(""), Boolean(""));

console.log(Number(0), String(0), Boolean(0));

console.log(Number(0 - 10), String(0 - 10), Boolean(0 - 10));

console.log(Number("-105"), String("-105"), Boolean("-105"));
