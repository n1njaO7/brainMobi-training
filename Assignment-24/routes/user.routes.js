const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {

    // Get data from request body
    const { name, email } = req.body ?? {};

    // Get request method
    const method = req.method;

    // Read a request header
    const userAgent = req.get("user-agent");

    // Get original request URL, including query string
    const originalUrl = req.originalUrl;

    // Get route parameters
    const userId = req.params.id;

    // Get query parameters
    const { role, status } = req.query;

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
            userAgent,
            originalUrl,
            params: {
                userId
            },
            query: {
                role,
                status
            }
        }
    });

});

module.exports = router;
