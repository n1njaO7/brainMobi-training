const express = require ("express");
const app = express();

app.get("/product", (req, res) => {
    const category = req.query.category;
    res.json({
        category: category
    });
});

//Multiple query parameters
app.get("/products", (req, res) => {

    const category = req.query.category;
    const page = req.query.page;
    const limit = req.query.limit;

    res.json({
        category: category,
        page: page,
        limit: limit
    });

});

app.listen(3000,()=>{
    console.log("Serving is running on port 3000");
})
