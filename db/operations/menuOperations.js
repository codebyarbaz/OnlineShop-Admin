const menus = require("../schemas/menus");

menuOperations = {
  addnewmenu(menuObject, res, next) {
    menus
      .create(menuObject)
      .then(data => {
        res.send("Menu Added");
      })
      .catch(err => {
        res.send("Error in adding menu: ", err);
      });
  },
  getallmenu(res, next) {
    menus
      .find()
      .then(data => {
        // if(data)
        res.send(data);
      })
      .catch(err => {
        res.send("Error in getting menus: ", err);
      });
  },
  deletemenu(id, res, next) {
    menus.findByIdAndRemove(id, (err, doc) => {
      if (err) {
        res.send("Error in deleting menu");
      } else {
        res.send("Menu Deleted, Please refresh the page.");
      }
    });
  },
  editMenu(menuObject, res) {
    let id = menuObject.id;
    let menu = { menu: menuObject.name };
    menus.findByIdAndUpdate(id, { $set: menu }, (err, doc) => {
      if (err) {
        res.send("Error in upading menu");
      } else {
        res.send("Successfully Menu Edited");
      }
    });
  }
};

module.exports = menuOperations;
