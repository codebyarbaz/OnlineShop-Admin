const Electronics = require("../schemas/submenus/Electronics");
const TVs = require("../schemas/submenus/TVs");
const Men = require("../schemas/submenus/Men");
const Women = require("../schemas/submenus/Women");
const Baby = require("../schemas/submenus/Baby");
const Furnitures = require("../schemas/submenus/Furnitures");

const subMenuOperations = {
  addSubMenu(submenuObject, res) {
    if (submenuObject.mainmenu == "Electronics") {
      let submenu = { name: submenuObject.newsubmenu };
      Electronics.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
    if (submenuObject.mainmenu == "TVs") {
      let submenu = { name: submenuObject.newsubmenu };
      TVs.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
    if (submenuObject.mainmenu == "Men") {
      let submenu = { name: submenuObject.newsubmenu };
      Men.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
    if (submenuObject.mainmenu == "Women") {
      let submenu = { name: submenuObject.newsubmenu };
      Women.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
    if (submenuObject.mainmenu == "Baby") {
      let submenu = { name: submenuObject.newsubmenu };
      Baby.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
    if (submenuObject.mainmenu == "Furnitures") {
      let submenu = { name: submenuObject.newsubmenu };
      Furnitures.create(submenu, (err, doc) => {
        if (err) {
          res.send("Error in adding submenu");
        } else {
          res.send("SubMenu Added");
        }
      });
    }
  },
  getallsubmenus(mainmenuObject, res) {
    if (mainmenuObject.name == "TVs") {
      TVs.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (mainmenuObject.name == "Electronics") {
      Electronics.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (mainmenuObject.name == "Men") {
      Men.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (mainmenuObject.name == "Women") {
      Women.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (mainmenuObject.name == "Baby") {
      Baby.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
    if (mainmenuObject.name == "Furnitures") {
      Furnitures.find((err, docs) => {
        if (err) {
          res.send("Error in founding submenus");
        } else {
          res.send(docs);
        }
      });
    }
  },
  deletesubmenu(detailsObject, res) {
    if (detailsObject.mainmenu == "Electronics") {
      Electronics.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
    if (detailsObject.mainmenu == "TVs") {
      TVs.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
    if (detailsObject.mainmenu == "Men") {
      Men.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
    if (detailsObject.mainmenu == "Women") {
      Women.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
    if (detailsObject.mainmenu == "Baby") {
      Baby.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
    if (detailsObject.mainmenu == "Furnitures") {
      Furnitures.findByIdAndRemove(detailsObject.id, (err, doc) => {
        if (err) {
          res.send("Error in deleting submenu");
        } else {
          res.send("SubMenu Deleted Successfully, Please refresh the page");
        }
      });
    }
  },
  editsubmenu(menuObject, res) {
    let id = menuObject.id;
    let editmenu = { name: menuObject.editedmenu };
    if (menuObject.mainmenu == "Electronics") {
      Electronics.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
    if (menuObject.mainmenu == "TVs") {
      TVs.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
    if (menuObject.mainmenu == "Men") {
      Men.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
    if (menuObject.mainmenu == "Women") {
      Women.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
    if (menuObject.mainmenu == "Baby") {
      Baby.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
    if (menuObject.mainmenu == "Furnitures") {
      Furnitures.findByIdAndUpdate(id, editmenu, (err, doc) => {
        if (err) {
          res.send("Error in updating submenu");
        } else {
          res.send("Submenu Edited Successfully, Please refresh the page");
        }
      });
    }
  }
};

module.exports = subMenuOperations;
