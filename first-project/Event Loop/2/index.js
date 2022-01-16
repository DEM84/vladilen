function runCode() {
  console.log("before promise");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Zero Promise");

      resolve();
    }, 0);
  });
}

setTimeout(() => {
  console.log("Zero");
}, 0);

runCode().then(() => console.log("Zero Promise Invoked"));

console.log("One");

// One
// before promise
// zero promise invoked
// zero
// zero promice

// before promise
// One
// zero
// zero promice
// zero promise invoked
