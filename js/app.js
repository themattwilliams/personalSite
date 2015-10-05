var app = angular.module("ProfileApp", ['ngRoute']);
app.config(['$routeProvider', '$httpProvider',  function($routeProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $routeProvider
      .when('/', {
        templateUrl: '/personalSite/partials/home.html',
        controller: 'ProfileController'
      })
      .when('/projects', {
        templateUrl: '/personalSite/partials/projects.html',
        controller: 'ProfileController'
      })
      .when('/about', {
        templateUrl: '/personalSite/partials/about.html',
        controller: 'ProfileController'
      })
      .when('/resume', {
        templateUrl: '/personalSite/partials/resume.html',
        controller: 'ProfileController'
      })
      .when('/home', {
        templateUrl: '/personalSite/partials/home.html',
        controller: 'ProfileController'
      })
      // .when('/game/:id', {
      //   templateUrl: '/partials/show.html',
      //   controller: 'ShowController'
      // })
}])
