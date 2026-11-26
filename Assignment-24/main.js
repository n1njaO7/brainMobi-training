const express = require("express");

// Import error-handling middleware
const errorHandler = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.get("/users", (req, res, next) => {

    const error = new Error("Unable to fetch users");

    next(error);

});

// Register error-handling middleware
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});