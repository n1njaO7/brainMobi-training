const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    // Get data from request body
    const { name, email } = req.body ?? {};

    // Get request method
    const method = req.method;

    // Read a request header
    const userAgent = req.get("user-agent");

    // Validate input
    if (!name || !email) {

        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });

    }

    // Send response
    res.status(201).json({
        success: true,
        message: "User created successfully",

        data: {
            name,
            email
        },

        requestInfo: {
            method,
            userAgent
        }
    });

});

module.exports = router;
