// Call Stack

function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
}

first();
second();

function first() {
    console.log("Inside first");

    second();
}

function second() {
    console.log("Inside second");

    third();
}

function third() {
    console.log("Inside third");
}

first();

function multiply(a, b) {
    return a * b;
}

function calculate() {
    const result = multiply(5, 10);

    console.log(result);
}

calculate();

//===========================================

//Callback Queue

//setTimeout() and Callback Queue
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");

//Multiple callbacks
console.log("Start");

setTimeout(() => {
    console.log("Timer 1");
}, 1000);

setTimeout(() => {
    console.log("Timer 2");
}, 0);

console.log("End");

//Synchronous code delays callbacks
console.log("Start");

setTimeout(() => {
    console.log("Timer callback");
}, 0);

const start = Date.now();

while (Date.now() - start < 2000) {
    // Blocking synchronous operation
}

console.log("End");

// =================================================

//Microtask Queue

// Promise and setTimeout()
console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("End");

console.log("Start");


//Multiple microtasks
Promise.resolve().then(() => {
    console.log("Promise 1");

    Promise.resolve().then(() => {
        console.log("Nested Promise");
    });
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");


//Microtasks created inside microtasks
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");

    Promise.resolve().then(() => {
        console.log("Nested Promise");
    });
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");