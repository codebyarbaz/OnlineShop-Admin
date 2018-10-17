const express = require("express");
const caroRouter = express.Router();
const UploadImage = require("../db/uploadConfig/caroImages");
const caroOperations = require("../db/operations/caroOperations");

caroRouter.post("/addnewimage", UploadImage.any(), (req, res) => {
  let imageUrl =
    req.headers.origin + "/uploads/carousel_images/" + req.files[0].filename;
  let ImageObject = {
    name: req.files[0].originalname,
    imageUrl,
    file: req.files[0].filename
  };
  caroOperations.addNewImage(ImageObject, res);
});

caroRouter.get("/getAllCarouselImages", (req, res) => {
  caroOperations.getAllCarouselImages(res);
});

caroRouter.post("/DeleteCarouselImage", (req, res) => {
  let IDObject = req.body;
  caroOperations.DeleteCarouselImage(IDObject, req, res);
});

module.exports = caroRouter;
