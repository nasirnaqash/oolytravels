const express = require("express");
const app = express.Router();

app.use("/enquire", require("./enquire"));

module.exports = app;
