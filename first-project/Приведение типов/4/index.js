// 1 NaN
console.log(Number(" 1 2 3 4 5"));
// 2 NaN
console.log(Number("1234 5"));
// 3 12345
console.log(Number("12345"));
// 4 ''
console.log(String(false));
// 5 false
console.log(Boolean(0000000));
// 6 true
console.log(Boolean(0.0000001));
// 7 ''
console.log(String(undefined));
// 8 NaN
console.log(Number("100f"));
// 9 100
console.log(Number("100"));
// 10 1
console.log(Number("000001"));

// Не везде угадал
