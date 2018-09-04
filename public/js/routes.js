app.config([
  "$routeProvider",
  "$locationProvider",
  ($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "../views/home.html",
        controller: "homeController"
      })
      .when("/menus", {
        templateUrl: "../views/menus.html"
      })
      .when("/products", {
        templateUrl: "../views/products.html"
      })
      .when("/user", {
        templateUrl: "../views/user.html"
      })
      .otherwise({
        templateUrl: "../views/404.html"
      });
  }
]);
