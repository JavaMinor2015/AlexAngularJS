'use strict';
angular.module('angularTestsApp.filters').filter('contactName', function () {
  return function (input) {
    return input.firstName + ' ' + input.surname;
  };
});
