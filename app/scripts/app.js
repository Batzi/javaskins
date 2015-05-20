'use strict';

/**
 * @ngdoc overview
 * @name storefrontApp
 * @description
 * # storefrontApp
 *
 * Main module of the application.
 */
angular
  .module('storefrontApp', [
    'storefrontapp.moltin',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/storeroute', {
        templateUrl: 'views/storeroute.html',
        controller: 'StorerouteCtrl',
        resolve: {
            categories: function($q, MoltinAuth){
              var deferred = $q.defer();
              $q.when(MoltinAuth).then(function(moltin){
                moltin.Category.List(null, function(categories){
                  deferred.resolve(categories);
                });

              })
              return deferred.promise;
            }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        resolve: {
            category: function($q, $route ,MoltinAuth){
              var deferred = $q.defer();
              $q.when(MoltinAuth).then(function(moltin){
                moltin.Category.Get($route.current.params.id, function(category){
                  deferred.resolve(category);
                });

              })
              return deferred.promise;
            },
            products: function($q, $route ,MoltinAuth){
              var deferred = $q.defer();
              $q.when(MoltinAuth).then(function(moltin){
                moltin.Product.List({category: $route.current.params.id}, function(products){
                  deferred.resolve(products);
                });

              })
              return deferred.promise;
            }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        resolve: {
        product: function($q, $route ,MoltinAuth){
              var deferred = $q.defer();
              $q.when(MoltinAuth).then(function(moltin){
                moltin.Product.Get($route.current.params.id, function(product){
                  deferred.resolve(product);
                });

              })
              return deferred.promise;
            },
            moltin: function($q, MoltinAuth){
              return MoltinAuth;
            }

          }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
