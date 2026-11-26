
const express = require("express");
const path = require("path");

const app = express();

//  Parse JSON request bodies
app.use(express.json());

//  Parse URL-encoded form submissions
app.use(express.urlencoded({ extended: true }));

//  Parse raw request bodies as Buffer
app.use(express.raw({ type: "application/octet-stream" }));

//  Parse text request bodies as String
app.use(express.text({ type: "text/plain" }));

//  Serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// JSON POST route
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: "User created successfully",
        user: { name, email }
    });
});

// Raw data route
app.post("/api/raw", (req, res) => {
    const binaryData = req.body;

    const dataString = binaryData.toString("utf-8");

    res.send(`Received binary data: ${dataString}`);
});

// Text data route
app.post("/api/text", (req, res) => {
    const textData = req.body;

    console.log(typeof textData); // string

    res.send(`Received text data: ${textData}`);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
