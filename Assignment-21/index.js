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