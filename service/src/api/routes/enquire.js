const express = require("express");
const EnquireController = require("../controller/enquireController");

const app = express.Router();
app.post("/", EnquireController.enquire);

module.exports = app;
