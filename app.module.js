angular
  .module('AngularNorris', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/norris', {
        templateUrl: 'templates/norris.html',
        controller: 'norrisController'
      });
  });
