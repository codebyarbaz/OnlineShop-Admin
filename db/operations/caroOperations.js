const Carousel = require("../schemas/carouselSchema");
const fs = require("fs");
const path = require("path");

const caroOperations = {
  addNewImage(ImageObject, res) {
    Carousel.create(ImageObject, (err, doc) => {
      if (err) {
        return res.send("Error: In adding new Carousel Image");
      } else {
        res.send("Carousel Image Added Successfully");
      }
    });
  },
  getAllCarouselImages(res) {
    Carousel.find((err, docs) => {
      if (err) {
        return res.send("Error: In getting Carousel Images");
      } else {
        res.send(docs);
      }
    });
  },
  DeleteCarouselImage(IDObject, req, res) {
    Carousel.findByIdAndRemove(IDObject.ImageID, (err, doc) => {
      if (err) {
        return res.send("Error: In removing Carousel Image");
      } else {
        res.send("Image removed from Carousel, Please reload page");
      }
    });
  }
};

module.exports = caroOperations;
