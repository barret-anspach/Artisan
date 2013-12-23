'use strict';

angular.module('artisanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "views/main.html"
            })
            .state('catalog', {
                url: "/catalog",
                templateUrl: "views/catalog.html"
            })
            .state('catalog.detail', {
                url: "/:id",
                templateUrl: "views/catalog.detail.html"

            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html"
            })

  });

  Parse.initialize("ZbDr2YfdSml61bcJGGKAqg25YYI1zhycsYLj7gF8", "0jAJPgQ8VqIikLsrAPLwrscwO3kaNMre7mF6MxdV");
