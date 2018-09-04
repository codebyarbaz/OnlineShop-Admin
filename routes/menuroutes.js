const express = require("express");
const menurouter = express.Router();
const menuOperations = require("../db/operations/menuOperations");
const submenuOperations = require("../db/operations/submenuOperations");

// Menu Operations----------------------------- START

menurouter.post("/addnewmenu", (req, res, next) => {
  const menu = req.body.newmenu;
  const Menu = require("../models/menu");
  let menuObject = new Menu(menu);
  menuOperations.addnewmenu(menuObject, res, next);
});

menurouter.get("/getallmenus", (req, res, next) => {
  menuOperations.getallmenu(res, next);
});

menurouter.post("/deletemenu", (req, res, next) => {
  let id = req.body.id;
  menuOperations.deletemenu(id, res, next);
});

menurouter.post("/editmenu", (req, res, next) => {
  let menuObject = req.body;
  menuOperations.editMenu(menuObject, res);
});

// Menu Operations----------------------------- END

// SubMenu Operations ----------------------- Start

menurouter.post("/addnewsubmenu", (req, res, next) => {
  let submenuObject = req.body;
  submenuOperations.addSubMenu(submenuObject, res);
});

// SubMenu Operations ---------------------------- End

module.exports = menurouter;
