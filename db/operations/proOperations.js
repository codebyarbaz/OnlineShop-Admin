const Electronics = require("../schemas/products/ElectronicsSchema");
const TVs = require("../schemas/products/TVsSchema");
const Men = require("../schemas/products/MenSchema");
const Women = require("../schemas/products/WomenSchema");
const Baby = require("../schemas/products/BabySchema");
const Furnitures = require("../schemas/products/FurnituresSchema");

const proOperations = {
  addNewProduct(proDetails, res) {
    if (proDetails.menu == "Electronics") {
      Electronics.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
    if (proDetails.menu == "Men") {
      Men.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
    if (proDetails.menu == "Women") {
      Women.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
    if (proDetails.menu == "TVs") {
      TVs.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
    if (proDetails.menu == "Baby") {
      Baby.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
    if (proDetails.menu == "Furnitures") {
      Furnitures.create(proDetails, (err, doc) => {
        if (err) {
          res.send("Error in adding new product ", err);
        } else {
          res.send("New Product Added");
        }
      });
    }
  }
};

// proOperations.addNewProduct(
//   {
//     title: "MSI Z370 GAMING PRO CARBON AC ATX Motherboard  (Black) 3",
//     price: 29250,
//     discount: 0,
//     availability: [
//       {
//         pincode: 110090
//       },
//       {
//         pincode: 1109021
//       },
//       {
//         pincode: 22091
//       }
//     ],
//     description: "Description",
//     specification:
//       "Essentials\r\nForm Factor\r\nATX\r\nSocket Type\r\nLGA1151\r\nChipset\r\nIntel Z270",
//     menu: "Electronics",
//     submenu: "Computer Accessories",
//     trusted: true,
//     images: [
//       {
//         name: "20.jpeg",
//         url:
//           "http://localhost:3000/uploads/product_images/Image_1-1539584318990.jpeg"
//       },
//       {
//         name: "21.jpeg",
//         url:
//           "http://localhost:3000/uploads/product_images/Image_2-1539584318992.jpeg"
//       },
//       {
//         name: "22.jpeg",
//         url:
//           "http://localhost:3000/uploads/product_images/Image_3-1539584318993.jpeg"
//       },
//       {
//         name: "23.jpeg",
//         url:
//           "http://localhost:3000/uploads/product_images/Image_4-1539584318994.jpeg"
//       }
//     ],
//     rating: [
//       { rate: 1 },
//       { rate: 2 },
//       { rate: 3 },
//       { rate: 4 },
//       { rate: 5 },
//       { rate: 3 },
//       { rate: 3 },
//       { rate: 5 },
//       { rate: 5 }
//     ],
//     reviews: [
//       {
//         title: "Awesome Quality",
//         rate: 5,
//         note: "This product is worthy and i loved it :)"
//       },
//       {
//         title: "Awesome Quality",
//         rate: 3,
//         note: "This product is worthy and i loved it :)"
//       },
//       {
//         title: "Awesome Quality Proudct That I never seen",
//         rate: 2,
//         note:
//           "Awesome Quality Proudct That I never seen really, This product is worthy and i loved it :) Awesome Quality Proudct That I never seen really, This product is worthy and i loved it :)"
//       },
//       {
//         title: "Awesome Quality Proudct That I never seen",
//         rate: 4,
//         note:
//           "Awesome Quality Proudct That I never seen really, This product is worthy and i loved it :) Awesome Quality Proudct That I never seen really, This product is worthy and i loved it :)Awesome Quality Proudct That I never seen really, This product is worthy and i loved it :)"
//       }
//     ],
//     clicked: 0,
//     purchased: 0,
//     active: true,
//     __v: 0
//   },
//   (err, doc) => {
//     console.log("Done");
//   }
// );

module.exports = proOperations;
