setTimeout(() => {
  console.log("setTimeout");
}, 0);

const promise = new Promise((resolve) => {
  console.log("Promise");
  resolve();
});

promise.then(() => {
  console.log("Promise resolve");
});

console.log("End");

//  End
//  Promise
//  Promise resolve
//  setTimeout

//  Promise
//  End
//  Promise resolve
//  setTimeout
