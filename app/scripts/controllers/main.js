'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('MainCtrl', function ($scope) {
      $scope.ADDING = false;
      $scope.COUNTER = 2;
      $scope.newContact = {};
      $scope.contacts = [
        {
          id: 0,
          firstName: 'Frank',
          surname: 'Muscles',
          email: 'frank@muscles.com',
          editMode: false
        },
        {
          id: 1,
          firstName: 'Eddy',
          surname: 'Valentino',
          email: 'eddy@valfam.co.uk',
          editMode: false
        }
      ];

      $scope.edit = function (contact) {
        contact.editMode = true;
      };

      $scope.saveContact = function () {
        $scope.ADDING = false;
        $scope.newContact.id = $scope.COUNTER++;
        $scope.contacts.push($scope.newContact);
        $scope.newContact = {};
      };

      $scope.delete = function (contact) {
        $scope.contacts.splice($scope.contacts.indexOf(contact), 1);
      }
    }
  );
