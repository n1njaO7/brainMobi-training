// console.log(__filename);

// const path = require("path");
// console.log("Full Path:", __filename);
// console.log("File Name:", path.basename(__filename));
// console.log("Directory:", path.dirname(__filename));
// console.log("Extension:", path.extname(__filename));

// //Example 1: Synchronous execution
// console.log("Task 1");

// console.log("Task 2");

// console.log("Task 3");

// //Example 2: Asynchronous execution
// console.log("Task 1");

// setTimeout(() => {
//     console.log("Task 2");
// }, 2000);

// console.log("Task 3");

//promise vs setTimeOut
console.log("Start");
setTimeout(() => {
    console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
    console.log("Promise");
});
console.log("End");
