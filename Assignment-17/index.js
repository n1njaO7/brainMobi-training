//1. Event Loop Deep Dive
console.log("1. Start");

setTimeout(() => {
    console.log("2. setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise 1");
});

queueMicrotask(() => {
    console.log("4. queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("5. Promise 2");
});

console.log("6. End");