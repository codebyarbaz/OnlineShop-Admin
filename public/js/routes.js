app.config([
  "$routeProvider",
  "$locationProvider",
  ($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/", {
        templateUrl: "../views/home.html"
      })
      .when("/menus", {
        templateUrl: "../views/menus.html",
        controller: "menuController"
      })
      .when("/products", {
        templateUrl: "../views/products.html",
        controller: "proController"
      })
      .when("/user", {
        templateUrl: "../views/user.html"
      })
      .otherwise({
        templateUrl: "../views/404.html"
      });
  }
]);
