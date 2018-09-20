const express = require("express");
const proRouter = express.Router();
const multer = require("multer");
const path = require("path");

proRouter.post("/addnewproduct", (req, res) => {
  const storage = multer.diskStorage({
    destination: "public/uploads",
    filename: function(req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  });
  function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Error: Only images allowed");
    }
  }
  const upload = multer({
    storage,
    limits: { fileSize: 2000000 },
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  }).fields([
    {
      name: "Image_1",
      maxCount: 1
    },
    {
      name: "Image_2",
      maxCount: 1
    },
    {
      name: "Image_3",
      maxCount: 1
    },
    {
      name: "Image_4",
      maxCount: 1
    }
  ]);
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.files);
      console.log(req.body);
    }
  });
});

module.exports = proRouter;
