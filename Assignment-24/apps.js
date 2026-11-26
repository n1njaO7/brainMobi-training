const express = require("express");

const app = express();

const userRoutes = require("./routes/user.routes");

// Parse JSON request bodies
app.use(express.json());

// Mount user routes
app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
