app.controller("proController", [
  "$scope",
  "menuFactory",
  function($scope, menuFactory) {
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
  }
]);
