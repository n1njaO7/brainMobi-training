const express = require("express");

const app = express();

// Import central routes
const routes = require("./routes");

// Middleware to parse JSON
app.use(express.json());

// Register all routes
app.use("/api", routes);

// Start server
app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
