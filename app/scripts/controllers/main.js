'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('MainCtrl', function ($scope, $resource, Notification, contactDataSource) {
      contactDataSource.fetchContacts($scope);

      $scope.newContact = {};

      $scope.edit = function (contact) {
        contactDataSource.editContact(contact);
      };

      $scope.saveContact = function () {
        contactDataSource.saveContact($scope);
      };

      $scope.delete = function (contact) {
        contactDataSource.deleteContact(contact);
      };
    }
  );
