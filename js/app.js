var app = angular.module("ProfileApp", ['ngRoute']);
app.config(['$routeProvider', '$httpProvider',  function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: '/partials/home.html',
        controller: 'ProfileController'
      })
      .when('/projects', {
        templateUrl: '/partials/projects.html',
        controller: 'ProfileController'
      })
      .when('/about', {
        templateUrl: '/partials/about.html',
        controller: 'ProfileController'
      })
      .when('/resume', {
        templateUrl: '/partials/resume.html',
        controller: 'ProfileController'
      })
      .when('/home', {
        templateUrl: '/partials/home.html',
        controller: 'ProfileController'
      })
      // .when('/game/:id', {
      //   templateUrl: '/partials/show.html',
      //   controller: 'ShowController'
      // })
}])
