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
    $scope.selectmainmenu = false;
    $scope.addSubMenu = () => {
      if ($scope.mainmenu == null) {
        $scope.selectmainmenu = true;
      }
      if ($scope.newsubmenu) {
        let newsubmenu = $scope.newsubmenu;
        let mainmenu = $scope.mainmenu.menu;
        let submenuObject = { newsubmenu, mainmenu };
        console.log("Object: ", submenuObject);
        homeFactory.addSubMenu(submenuObject);
        // promise.then(
        //   data => {
        //     $scope.submenuinfo = data.data;
        //   },
        //   err => {
        //     $scope.submenuinfo = data.data;
        //   }
        // );
      }
    };
  }
]);
