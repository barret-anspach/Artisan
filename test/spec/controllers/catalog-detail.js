'use strict';

describe('Controller: CatalogDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('artisanApp'));

  var CatalogDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogDetailCtrl = $controller('CatalogDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
