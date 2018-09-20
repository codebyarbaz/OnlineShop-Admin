app.factory("menuFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      getAllMenus() {
        let defer = $q.defer();
        $http.get("/getallmenus").then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      deleteMenu(id) {
        let idObject = { id };
        let defer = $q.defer();
        $http.post("/deletemenu", idObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      editMenu(id, name) {
        let menuObject = { id, name };
        let defer = $q.defer();
        $http.post("/editmenu", menuObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      addSubMenu(submenuObject) {
        let defer = $q.defer();
        $http.post("/addnewsubmenu", submenuObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      getAllSubMenus(mainmenuObject) {
        let defer = $q.defer();
        $http.post("/getallsubmenus", mainmenuObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      deleteSubMenu(detailsObject) {
        let defer = $q.defer();
        $http.post("/deletesubmenu", detailsObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      editSubMenu(menuObject) {
        let defer = $q.defer();
        $http.post("/editsubmenu", menuObject).then(
          response => {
            defer.resolve(response);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      }
    };
    return object;
  }
]);
