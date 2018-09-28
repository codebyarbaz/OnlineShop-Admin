const express = require("express");
const proRouter = express.Router();
const upload = require("../db/uploadConfig");
const proOperations = require("../db/operations/proOperations");

proRouter.post("/addnewproduct", upload.any(), (req, res) => {
  res.status(200).send("Done");
});

proRouter.post("/test", (req, res) => {
  console.log(req.body);
});

module.exports = proRouter;
