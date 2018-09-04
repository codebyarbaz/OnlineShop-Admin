const express = require("express");
const homerouter = express.Router();

homerouter.get("/", (req, res, next) => {
  res.send("Hello");
});

module.exports = homerouter;
