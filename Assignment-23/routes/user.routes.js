const express = require("express");

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
    res.status(200).json({
        message: "All users retrieved successfully"
    });
});

// GET a single user
router.get("/:id", (req, res) => {
    const userId = req.params.id;

    res.status(200).json({
        message: "User retrieved successfully",
        userId
    });
});

// POST a new user
router.post("/", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: "User created successfully",
        user: { name, email }
    });
});

module.exports = router;