'use strict';

angular.module('storefrontApp')
  .controller('StorerouteCtrl', function ($scope, categories) {
    $scope.categories = categories;
  });
