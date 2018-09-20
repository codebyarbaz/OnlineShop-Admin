app.controller("menuController", [
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
    $scope.getAllMenus = () => {
      let promise = menuFactory.getAllMenus();
      promise.then(
        data => {
          if (data.data.length) {
            $scope.menus = data.data;
          } else {
            $scope.menusinfo = "No Menus Found";
          }
        },
        err => {
          $scope.err = err;
        }
      );
    };
    $scope.deleteMenu = id => {
      let promise = menuFactory.deleteMenu(id);
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
      let promise = menuFactory.editMenu(id, editedmenu);
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
      } else {
        if ($scope.newsubmenu) {
          let newsubmenu = $scope.newsubmenu;
          let mainmenu = $scope.mainmenu.menu;
          let submenuObject = { newsubmenu, mainmenu };
          let promise = menuFactory.addSubMenu(submenuObject);
          promise.then(
            data => {
              $scope.submenuinfo = data.data;
            },
            err => {
              $scope.submenuinfo = err;
            }
          );
        }
      }
    };
    $scope.selectmainsubmenu = false;
    $scope.getAllSubMenus = () => {
      if ($scope.mainmenu2 == null) {
        $scope.selectmainsubmenu = true;
      } else {
        let mainmenu = { name: $scope.mainmenu2.menu };
        let promise = menuFactory.getAllSubMenus(mainmenu);
        promise.then(
          data => {
            if (data.data.length) {
              $scope.submenusdata = data.data;
            } else {
              $scope.submenusdatainfo = "No SubMenus Found";
            }
          },
          err => {
            $scope.submenusdata = err;
          }
        );
      }
    };
    $scope.deleteSubMenu = id => {
      let detailsObject = { id, mainmenu: $scope.mainmenu2.menu };
      let promise = menuFactory.deleteSubMenu(detailsObject);
      promise.then(
        data => {
          $scope.submenusinfo = data.data;
        },
        err => {
          $scope.submenusinfo = err;
        }
      );
    };
    $scope.update2 = false;
    $scope.updateSubMenu = id => {
      $scope.update2 = $scope.update2 ? false : true;
      $scope.editmenuid2 = id;
    };
    $scope.editSubMenu2 = editedmenu => {
      let menuObject = {
        id: $scope.editmenuid2,
        mainmenu: $scope.mainmenu2.menu,
        editedmenu
      };
      let promise = menuFactory.editSubMenu(menuObject);
      promise.then(
        data => {
          $scope.update2 = false;
          $scope.submenuupdateinfo = data.data;
        },
        err => {
          $scope.submenuupdateinfo = err;
        }
      );
    };
  }
]);
