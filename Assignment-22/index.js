// //setTimeout()
// console.log("Start");

// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);

// console.log("End");

// // 1. Zero delay
// setTimeout(() => {
//     console.log("Timer");
// }, 0);

// console.log("Hello");

// // 2. Passing arguments
// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// setTimeout(greet, 1000, "Ashmit");

// //3. Clearing a timer
// const timer = setTimeout(() => {
//     console.log("Reminder: Complete your task!");
// }, 3000);

// setTimeout(() => {
//     clearTimeout(timer);
//     console.log("Reminder cancelled!");
// }, 1000);

// //=======================================================

// //setImmediate()
// console.log("Start");

// setImmediate(() => {
//     console.log("Immediate callback");
// });

// console.log("End");

// //setImmediate() vs setTimeout()
// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// setImmediate(() => {
//     console.log("Immediate");
// });

// const fs = require("fs");

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log("Timeout");
//     }, 0);

//     setImmediate(() => {
//         console.log("Immediate");
//     });
// });

// //=========================================================

// //process.nextTick()
// console.log("Start");

// process.nextTick(() => {
//     console.log("Next Tick");
// });

// console.log("End");

// function recursiveTask() {
//     process.nextTick(() => {
//         console.log("Next tick");
//         recursiveTask();
//     });
// }
// recursiveTask();


// //=================================================================

//Error-first callback
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.error("Error:", err.message);
        return;
    }

    console.log("File Content:", data);

});

//Error-first callback function
function divide(a, b, callback) {

    if (b === 0) {
        return callback(new Error("Cannot divide by zero"));
    }

    const result = a / b;

    callback(null, result);
}

divide(10, 2, (err, result) => {

    if (err) {
        console.log(err.message);
        return;
    }

    console.log(result);
});

// division by zero
divide(10, 0, (err, result) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log(result);
});