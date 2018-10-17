app.factory("proFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      getAllSubMenus(mainmenuObject) {
        let defer = $q.defer();
        $http.post("/getallsubmenus", mainmenuObject).then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      test() {
        const arbaz = {
          name: "Arbaz Tyagi",
          hobby: "SEO"
        };
        $http.post("/pro/test", arbaz).then(
          res => {
            console.log("arbaz posted");
          },
          err => {
            console.log("Error in posting arbaz");
          }
        );
      }
    };
    return object;
  }
]);
