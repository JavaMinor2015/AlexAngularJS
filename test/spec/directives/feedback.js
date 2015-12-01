'use strict';
describe('Directive: feedback', function () {
  var $scope, $compile, $window;
  beforeEach(function () {
    module('angularTestsApp.directives');
    inject(function (_$compile_, _$window_, $rootScope) {
      $compile = _$compile_;
      $window = _$window_;
      $scope = $rootScope.$new();
      spyOn($window, 'alert');
    });
  });

  it('should send feedback to a web service', function () {
// Arrange
    var element = $compile('<feedback></feedback>')($scope);
    var isolateScope = element.isolateScope();
// Act
    isolateScope.feedback = {type: 'positive', message: 'super'};
    isolateScope.sendFeedback();
// Assert
    expect($window.alert).toHaveBeenCalled();
  });

  it('should support printing feedback to the console', function () {
// Arrange
    var element = $compile('<feedback debug></feedback>')($scope);
    var isolateScope = element.isolateScope();
// Act
    isolateScope.feedback = {type: 'positive', message: 'super'};
    isolateScope.sendFeedback();
// Assert
    expect($window.alert).not.toHaveBeenCalled();
  });
});
