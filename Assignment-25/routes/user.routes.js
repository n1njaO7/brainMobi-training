const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json({
        message: "All users"
    });

});

router.get("/:id", (req, res) => {

    res.json({
        message: "Single user",
        userId: req.params.id
    });

});

module.exports = router;
