const businessRoutes = require("./routes/businessRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/business", businessRoutes);

app.get("/", (req, res) => {
    res.send("LaunchPad Backend is Running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});