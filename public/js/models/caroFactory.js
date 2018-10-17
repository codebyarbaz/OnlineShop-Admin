app.factory("caroFactory", [
  "$http",
  "$q",
  ($http, $q) => {
    const object = {
      getAllCarouselImages() {
        let defer = $q.defer();
        $http.get("/caro/getAllCarouselImages").then(
          res => {
            defer.resolve(res);
          },
          err => {
            defer.reject(err);
          }
        );
        return defer.promise;
      },
      DeleteCarouselImage(ImageID, file) {
        let ID = {
          ImageID,
          file
        };
        let defer = $q.defer();
        $http.post("/caro/DeleteCarouselImage", ID).then(
          res => {
            defer.resolve(res);
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
