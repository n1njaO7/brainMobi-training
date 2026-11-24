//setTimeout()
console.log("Start");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

// 1. Zero delay
setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("Hello");

// 2. Passing arguments
function greet(name) {
    console.log(`Hello ${name}`);
}

setTimeout(greet, 1000, "Ashmit");

//3. Clearing a timer
const timer = setTimeout(() => {
    console.log("Reminder: Complete your task!");
}, 3000);

setTimeout(() => {
    clearTimeout(timer);
    console.log("Reminder cancelled!");
}, 1000);
