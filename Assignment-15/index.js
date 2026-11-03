//1. Browser Developer Tools
// A. Console methods
const name = "Ashmit";
const age = 22;

// Normal message
console.log("User:", name);

// Warning
console.warn("This is a warning");

// Error
console.error("Something went wrong");

// Information
console.info("Application started");

// Table
console.table([
    { name: "Ashmit", role: "Developer" },
    { name: "Rahul", role: "Admin" }
]);

// Group related messages
console.group("User Details");
console.log(name);
console.log(age);
console.groupEnd();

// Measure execution time
console.time("Loop");

for (let i = 0; i < 100000; i++) {
    // Some operation
}
console.timeEnd("Loop");

//-----------------------------------------------------------------

//B. Debugging using debugger
function calculateTotal(price, quantity) {
    debugger;

    const total = price * quantity;

    return total;
}

console.log(calculateTotal(100, 5));

//------------------------------------------------

//Network panel: Debugging API requests
fetch("http://localhost:5000/api/users")
    .then(response => response.json())
    .then(data => console.log(data));

//======================================================================

//2. JavaScript Error Types
// 1. SyntaxError
// Example: JSON.parse("{name: 'Ashmit'}");
// Invalid JSON because property names and strings need double quotes.


// 2. ReferenceError
try {
    console.log(userName);
} catch (error) {
    console.log(error.name);
}


// 3. TypeError
try {
    const user = null;
    console.log(user.name);
} catch (error) {
    console.log(error.name);
}


// 4. RangeError
try {
    const number = 10;
    number.toFixed(101);
} catch (error) {
    console.log(error.name);
}


// 5. URIError
try {
    decodeURIComponent("%");
} catch (error) {
    console.log(error.name);
}


// 6. AggregateError
try {
    throw new AggregateError(
        [
            new Error("Database connection failed"),
            new Error("Email service failed")
        ],
        "Multiple services failed"
    );
} catch (error) {
    console.log(error.name);
    console.log(error.errors);
}

