'use strict';

angular.module('storefrontApp')
  .factory('cartFactory', function ($q,MoltinAuth) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      moltin: function()
      {
        return MoltinAuth;
      }
    };
  });
