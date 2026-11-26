//Third-Party Middleware
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Third-party middleware

// Log incoming HTTP requests
app.use(morgan("dev"));

// Allow requests from React Vite frontend 
app.use(cors({
    origin: "http://localhost:5173"
}));

// Allow requests from React Vite frontend
app.use(cors({
    origin: "http://localhost:5173"
}));

// Add security-related HTTP headers
app.use(helmet({

    // Restrict resource loading sources
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            styleSrc: ["'self'"],
            imgSrc: ["'self'", "data:"]
        }
    },

    // Prevent MIME-type sniffing
    xContentTypeOptions: true,

    // Prevent the website from being embedded in iframes
    xFrameOptions: {
        action: "deny"
    },

    // Enforce HTTPS for one year
    strictTransportSecurity: {
        maxAge: 31536000,
        includeSubDomains: true
    }

}));


// Built-in middleware
app.use(express.json());

// Route
app.get("/api/users", (req, res) => {

    res.status(200).json({
        message: "Users retrieved successfully"
    });

});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
