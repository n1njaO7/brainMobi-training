// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//     res.send("Hello Node.js");
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//================================================================

const express = require("express");

const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Process information
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);
console.log("Current Directory:", process.cwd());
console.log("Environment:", NODE_ENV);

// Command-line arguments
console.log("Arguments:", process.argv);

// Memory information
console.log("Memory Usage:", process.memoryUsage());

app.get("/", (req, res) => {
    res.json({
        message: "Server running successfully",
        environment: NODE_ENV,
        processId: process.pid
    });
});

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
    console.log("Shutting down server...");

    server.close(() => {
        console.log("Server closed successfully");
        process.exit(0);
    });
});
