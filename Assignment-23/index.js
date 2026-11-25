const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Welcome to Express Server");
});

// Start the server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
