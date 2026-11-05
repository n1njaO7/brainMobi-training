
const express = require("express");
const router = express.Router();

const { calculate } = require("../controllers/calculator.controller");

router.post("/calculate", calculate);

module.exports = router;
