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

//===================================================================

//3. throw and Custom Errors
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
    }
}

class ValidationError extends AppError {
    constructor(message) {
        super(message, 400);
    }
}

class AuthenticationError extends AppError {
    constructor(message) {
        super(message, 401);
    }
}

function registerUser(user) {

    if (!user) {
        throw new ValidationError("User data is required");
    }

    if (!user.name || !user.email || !user.password) {
        throw new ValidationError("All fields are required");
    }

    if (!user.email.includes("@")) {
        throw new ValidationError("Invalid email address");
    }

    if (user.password.length < 8) {
        throw new ValidationError(
            "Password must contain at least 8 characters"
        );
    }

    if (user.role === "admin") {
        throw new AuthenticationError(
            "Admin registration is not allowed"
        );
    }

    return {
        message: "User registered successfully",
        name: user.name,
        email: user.email
    };
}

const user = {
    name: "Ashmit",
    email: "ashmit@example.com",
    password: "password123",
    role: "user"
};

console.log(registerUser(user));

//==========================================================================

//4. try...catch...finally
async function getUser(userId) {

    let connection = false;

    try {
        console.log("Connecting to database...");

        connection = true;

        if (!userId) {
            throw new Error("User ID is required");
        }

        // Simulating database operation
        const user = {
            id: userId,
            name: "Ashmit"
        };

        if (!user) {
            throw new Error("User not found");
        }

        console.log("User fetched successfully");

        return user;

    } catch (error) {

        console.error("Error:", error.message);

        throw error;

    } finally {

        if (connection) {
            console.log("Closing database connection...");
        }

        console.log("Operation completed");
    }
}

getUser(101)
    .then(console.log)
    .catch(console.error);