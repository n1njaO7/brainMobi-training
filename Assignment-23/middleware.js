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
