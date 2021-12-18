let getSumOfSequence = (number) => {
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  return arr[0] + arr[arr.length - 1];
};

console.log("getSumOfSequence()", getSumOfSequence(10));
