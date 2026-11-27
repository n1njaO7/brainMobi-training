const express = require("express");

const app = express();

// Parse incoming JSON data
app.use(express.json());

// Route
app.post("/users", (req, res) => {

    // Access request body
    const { name, email } = req.body;

    res.status(201).json({
        message: "User created successfully",
        data: {
            name,
            email
        }
    });

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
