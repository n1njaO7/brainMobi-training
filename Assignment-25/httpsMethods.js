const express = require("express");
const app = express();

app.use(express.json());

// GET - Fetch users
app.get("/users", (req, res) => {

    res.send("Fetching all users");

});

// POST - Create user
app.post("/users", (req, res) => {

    res.send("Creating a new user");

});

// PUT - Replace user
app.put("/users/:id", (req, res) => {

    res.send(`Replacing user ${req.params.id}`);

});

// PATCH - Partially update user
app.patch("/users/:id", (req, res) => {

    res.send(`Updating user ${req.params.id}`);

});

// DELETE - Remove user
app.delete("/users/:id", (req, res) => {

    res.send(`Deleting user ${req.params.id}`);

});

app.listen(3000,()=>{
    console.log("Serving is running on port 3000");
});