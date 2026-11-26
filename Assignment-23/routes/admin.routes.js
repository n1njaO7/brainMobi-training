const express = require("express");

const router = express.Router();

// GET all admins
router.get("/", (req, res) => {
    res.status(200).json({
        message: "All admins retrieved successfully"
    });
});

// GET a single admin
router.get("/:id", (req, res) => {
    const adminId = req.params.id;

    res.status(200).json({
        message: "Admin retrieved successfully",
        adminId
    });
});

// POST a new admin
router.post("/", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: "Admin created successfully",
        admin: { name, email }
    });
});

module.exports = router;