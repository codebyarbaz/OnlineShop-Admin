app.controller("caroController", [
  "$scope",
  "caroFactory",
  function($scope, caroFactory) {
    $scope.getAllCarouselImages = () => {
      let promise = caroFactory.getAllCarouselImages();
      promise.then(
        data => {
          data.data.length
            ? ($scope.images = data.data)
            : ($scope.caroInfo = "Carousel Image Not Found");
        },
        err => {
          $scope.images = err;
        }
      );
    };
    $scope.DeleteCarouselImage = (ImageID, file) => {
      let promise = caroFactory.DeleteCarouselImage(ImageID, file);
      promise.then(
        data => {
          $scope.caroInfo = data.data;
        },
        err => {
          $scope.caroInfo = err;
        }
      );
    };
  }
]);
