//Third-Party Middleware
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Third-party middleware

// Log incoming HTTP requests
app.use(morgan("dev"));

// Allow requests from React Vite frontend 
app.use(cors({
    origin: "http://localhost:5173"
}));

// Add security-related HTTP headers
app.use(helmet());

// Built-in middleware
app.use(express.json());

// Route
app.get("/api/users", (req, res) => {

    res.status(200).json({
        message: "Users retrieved successfully"
    });

});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
