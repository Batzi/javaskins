'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:StorerouteCtrl
 * @description
 * # StorerouteCtrl
 * Controller of the storefrontApp
 */

angular.module('storefrontApp')
  .controller('StorerouteCtrl', function ($scope, categories) {
    $scope.categories = categories;
  });
