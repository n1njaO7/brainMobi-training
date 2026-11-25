const express = require("express");

const router = express.Router();

// Import individual route files
const userRoutes = require("./user.routes");
const adminRoutes = require("./admin.routes");

// Connect routes with their respective paths
router.use("/users", userRoutes);
router.use("/admin", adminRoutes);

module.exports = router;