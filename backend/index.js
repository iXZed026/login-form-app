require("express-async-error");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const config = require("config");
const router = require("./src/routes/index")

mongoose.connect(config.get("db.address"))
    .then(() => console.log("Connect to mongoDb"))
    .catch((err) => console.log(err))

app.use(express.json());

app.use("/api", router)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Liste to port ", port))