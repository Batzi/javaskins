'use strict';

/**
 * @ngdoc function
 * @name storefrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the storefrontApp
 */
angular.module('storefrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
