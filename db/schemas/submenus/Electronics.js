const mongoose = require("../../common/dbConnection");
const Schema = mongoose.Schema;

let Mobiles = new Schema({
  name: String
});

let MobileAccessories = new Schema({
  name: String
});

let Laptops = new Schema({
  name: String
});

let Camera = new Schema({
  name: String
});

let SmartWatches = new Schema({
  name: String
});

let ElectronicsSchema = new Schema({
  Mobiles: [Mobiles],
  MobileAccessories: [MobileAccessories],
  Laptops: [Laptops],
  Camera: [Camera],
  SmartWatches: [SmartWatches]
});

let Electronics = mongoose.model("Electronics", ElectronicsSchema);

module.exports = Electronics;
