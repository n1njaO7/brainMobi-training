const express = require("express");
const app = express();

// Custom middleware
function logger(req, res, next) {

    console.log("Request received");
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    next();
}

// Register middleware
app.use(logger);

// Route
app.get("/", (req, res) => {
    res.send("Welcome Home");
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});


=======================================================

//types of Middleware
const express = require("express");
const morgan = require("morgan");
const app = express();
// Built-in middleware
app.use(express.json());
// Third-party middleware
app.use(morgan("dev"));
// Application-level middleware
app.use((req, res, next) => {
    console.log("Application middleware executed");
    next();
});
// Route handler
app.get("/", (req, res) => {
    res.json({
        message: "Express middleware example"
    });
});
// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        message: "Something went wrong"
    });
});
app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});

//======================================================================

//Application Level Middleware
const express = require("express");

const app = express();

// Global application-level middleware
app.use((req, res, next) => {

    console.log("Request received:", req.method, req.url);

    req.startTime = Date.now();

    next();
});

// Middleware for a specific path
app.use("/api", (req, res, next) => {

    console.log("API request detected");

    next();
});

// Home route
app.get("/", (req, res) => {

    res.json({
        message: "Home page",
        processingStartedAt: req.startTime
    });

});

// Middleware for a specific HTTP method and path
app.get("/api/users", (req, res) => {

    res.json({
        message: "Users retrieved",
        processingStartedAt: req.startTime
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
