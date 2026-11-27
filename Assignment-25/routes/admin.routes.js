const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({
        message: "All admins"
    });

});

router.get("/:id", (req, res) => {

    res.json({
        message: "Single admin",
        adminId: req.params.id
    });

});

module.exports = router;
