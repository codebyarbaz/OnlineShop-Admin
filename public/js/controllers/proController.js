app.controller("proController", [
  "$scope",
  "menuFactory",
  "proFactory",
  function($scope, menuFactory, proFactory) {
    let promise = menuFactory.getAllMenus();
    promise.then(
      data => {
        $scope.allmenus = data.data;
      },
      err => {
        $scope.allmenuesrr = err;
      }
    );
    $scope.getSubMenus = mainmenu => {
      let mainmenuObject = { name: mainmenu };
      let promise = menuFactory.getAllSubMenus(mainmenuObject);
      promise.then(
        data => {
          $scope.submenus = data.data;
          console.log(data.data);
        },
        err => {
          $scope.submenus = "Error in getting submenus";
        }
      );
    };
    $scope.test = (mainmenu, submenu) => {
      console.log("Mainmenu: ", mainmenu);
      console.log("SubMenu: ", submenu);
    };
    const arrayPincode = [];
    $scope.addProduct = () => {
      let pincodes = $scope.proAvailablity;
      let pincodesArray = pincodes.split(",");
      pincodesArray.forEach(pincode => {
        pincode = Number(pincode);
        var object = {};
        object.pincode = pincode;
        arrayPincode.push(object);
      });
      const proDetails = {
        title: $scope.proTitle,
        price: $scope.proPrice,
        discount: $scope.proDiscount,
        images: [],
        rating: [],
        availability: arrayPincode,
        description: $scope.proDescription,
        specification: $scope.proSpecification,
        reviews: [],
        // mainmenu: $scope.mainmenu.menu,
        // submenu: $scope.submenu,
        trusted: $scope.trusted,
        active: true,
        clicked: 0,
        purchased: 0
      };
      console.log("proController ", proDetails);
      proFactory.addNewProduct(proDetails);
    };
    $scope.test = () => {
      proFactory.test();
    };
  }
]);
