app.factory("proFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      addNewProduct(proDetails) {
        console.log("proFactory ", proDetails);
        $http.post("/pro/addnewproduct", proDetails).then(
          res => {
            console.log("proDetails posted");
          },
          err => {
            console.log("Error in posting proDetails", err);
          }
        );
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
