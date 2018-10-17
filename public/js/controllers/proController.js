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
      console.log(mainmenu);
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
    $scope.testFunction = menu => {
      console.log(menu);
    };
  }
]);
