const express = require("express");
const proRouter = express.Router();
const ImageUpload = require("../db/uploadConfig/proImages");
const proOperations = require("../db/operations/proOperations");

proRouter.post("/addnewproduct", ImageUpload.any(), (req, res) => {
  const ImageArray = req.files;
  const images = [];
  ImageArray.forEach(file => {
    const ImageObject = {};
    ImageObject.name = file.originalname;
    ImageObject.url =
      req.headers.origin + "/uploads/product_images/" + file.filename;
    images.push(ImageObject);
  });
  let pincodes = req.body.availability;
  let pincodeArray = pincodes.split(",");
  const availability = [];
  pincodeArray.forEach(pincode => {
    var object = {};
    object.pincode = pincode;
    availability.push(object);
  });
  let proDetails = req.body;
  proDetails.images = images;
  proDetails.rating = [];
  proDetails.reviews = [];
  proDetails.clicked = 0;
  proDetails.purchased = 0;
  proDetails.availability = availability;
  proDetails.active = true;
  proOperations.addNewProduct(proDetails, res);
});

proRouter.post("/test", (req, res) => {
  console.log(req.body);
});

module.exports = proRouter;
