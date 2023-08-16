// promises example
const MakePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const arrOne = ["userone", "usertwo", "userthree"];
    if (arrOne.length > 0) {
      resolve("user found");
    } else {
      reject("not found");
    }
  }, 2000);
});

MakePromise.then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

// Ans : user found

// Question 6

// Code Snippet 1
// console.log("First");
// setTimeout(() => console.log("Second"), 0);
// console.log("Third");

// Code Snippet 2
// console.log("First");
// function secondCall() {
//   console.log("Second");
// }
// setTimeout(secondCall, 2000);
// setTimeout(() => console.log("Third"), 0);
// console.log("Third");
