const express = require("express")

const calculatorRoutes = require("./routes/calculator.routes");

const app = express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message: "Calculator API is running"
    })
})

app.use("/api/calculator", calculatorRoutes);

app.listen(3000,()=>{
    console.log(`Server running on port 3000`)
})
