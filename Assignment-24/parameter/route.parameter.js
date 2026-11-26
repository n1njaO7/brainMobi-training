const express = require ("express");
const app = express();

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.json({
        message: "User details fetched",
        userId: userId
    });
});

app.get("/users/:userId/orders/:orderId", (req, res) => {
    const userId = req.params.userId;
    const orderId = req.params.orderId;
    res.json({
        userId: userId,
        orderId: orderId
    });
});


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
