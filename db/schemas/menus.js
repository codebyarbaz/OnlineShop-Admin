const mongoose = require("../common/dbConnection");

let menuSchema = new mongoose.Schema({
  menu: String
});

let menus = mongoose.model("menus", menuSchema);

module.exports = menus;
