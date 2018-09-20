const mongoose = require("../common/dbConnection");
const Schema = mongoose.Schema;

const ProductRatingSchema = new Schema({
  rate: Number
});

const ProductImagesSchema = new Schema({
  url: String
});

const AvialableDeliverySchema = new Schema({
  pincode: Number
});

const ProductReviewsSchema = new Schema({
  name: String,
  title: String,
  note: String
});

const ElectronicsSchema = new Schema({
  title: String,
  price: Number,
  discount: Number,
  images: [ProductImagesSchema],
  rating: [ProductRatingSchema],
  availability: [AvialableDeliverySchema],
  description: String,
  specification: String,
  reviews: [ProductReviewsSchema],
  menu: String,
  submenu: String,
  trusted: Boolean,
  active: Boolean,
  clicked: Number,
  purchased: Number
});

const MenSchema = new Schema({
  title: String,
  price: Number,
  discount: Number,
  images: [ProductImagesSchema],
  rating: [ProductRatingSchema],
  availability: [AvialableDeliverySchema],
  description: String,
  specification: String,
  reviews: [ProductReviewsSchema],
  menu: String,
  submenu: String,
  trusted: Boolean,
  active: Boolean,
  clicked: Number,
  purchased: Number
});

const WomenSchema = new Schema({
  title: String,
  price: Number,
  discount: Number,
  images: [ProductImagesSchema],
  rating: [ProductRatingSchema],
  availability: [AvialableDeliverySchema],
  description: String,
  specification: String,
  reviews: [ProductReviewsSchema],
  menu: String,
  submenu: String,
  trusted: Boolean,
  active: Boolean,
  clicked: Number,
  purchased: Number
});

const ProductsSchema = new Schema({
  Electronics: [ElectronicsSchema],
  Men: [MenSchema],
  Women: [WomenSchema]
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
