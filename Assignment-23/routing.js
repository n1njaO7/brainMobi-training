const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});



// Fetch all users
app.get("/users", (req, res) => {
    res.send("Get all users");
});

// Create a user
app.post("/users", (req, res) => {
    res.send("Create user");
});

// Replace a user
app.put("/users/:id", (req, res) => {
    res.send("Replace user");
});

// Partially update a user
app.patch("/users/:id", (req, res) => {
    res.send("Update user");
});

// Delete a user
app.delete("/users/:id", (req, res) => {
    res.send("Delete user");
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});