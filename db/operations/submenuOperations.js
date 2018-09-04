const Electronics = require("../schemas/submenus/Electronics");

const subMenuOperations = {
  addSubMenu(submenuObject, res) {
    let submenuObject = { submenu: submenuObject.newsubmenu };
    Electronics.create(submenuObject, (err, doc) => {
      if (err) {
        res.send("Err ", err);
      } else {
        res.send(doc);
      }
    });
  }
};

module.exports = subMenuOperations;
