app.controller("homeController", [
  "$scope",
  "homeFactory",
  function($scope, homeFactory) {
    let promise = homeFactory.getAllMenus();
    promise.then(
      data => {
        $scope.allmenus = data.data;
      },
      err => {
        $scope.allmenuesrr = err;
      }
    );
    console.log("homeController Loaded");
    $scope.getAllMenus = () => {
      let promise = homeFactory.getAllMenus();
      promise.then(
        data => {
          $scope.data = data.data;
        },
        err => {
          $scope.err = err;
        }
      );
    };
    $scope.deleteMenu = id => {
      console.log("ID: ", id);
      let promise = homeFactory.deleteMenu(id);
      promise.then(
        data => {
          $scope.menudata = data;
        },
        err => {
          $scope.menuerr = err;
        }
      );
    };
    $scope.update = false;
    $scope.updateMenu = id => {
      $scope.update = $scope.update ? false : true;
      $scope.editmenuid = id;
    };
    $scope.editMenu = editedmenu => {
      let id = $scope.editmenuid;
      let promise = homeFactory.editMenu(id, editedmenu);
      promise.then(
        data => {
          $scope.update = false;
          $scope.submenudata = data;
        },
        err => {
          $scope.submenuerr = err;
        }
      );
    };
  }
]);
