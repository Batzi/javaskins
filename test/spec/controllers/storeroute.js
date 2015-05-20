'use strict';

describe('Controller: StorerouteCtrl', function () {

  // load the controller's module
  beforeEach(module('storefrontApp'));

  var StorerouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StorerouteCtrl = $controller('StorerouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
