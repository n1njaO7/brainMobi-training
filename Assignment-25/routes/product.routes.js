const express = require("express");

const router = express.Router();

// Route chaining
router.route("/:id")

    // Retrieve a product
    .get((req, res) => {
        const productId = req.params.id;
        res.json({
            message: "Product retrieved",
            productId
        });
    })

    // Replace a product
    .put((req, res) => {
        const productId = req.params.id;
        const updatedProduct = req.body;
        res.json({
            message: "Product replaced",
            productId,
            updatedProduct
        });
    })

    // Partially update a product
    .patch((req, res) => {
        const productId = req.params.id;
        const updatedFields = req.body;
        res.json({
            message: "Product partially updated",
            productId,
            updatedFields
        });
    })

    // Delete a product
    .delete((req, res) => {
        const productId = req.params.id;
        res.json({
            message: "Product deleted",
            productId
        });
    });

module.exports = router;
