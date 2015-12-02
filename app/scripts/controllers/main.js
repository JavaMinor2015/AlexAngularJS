'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('MainCtrl', function ($scope, $resource, Notification, dataSource) {
      console.log(dataSource.someMethod());
      //var contactResource = $resource(
      //  'http://127.0.0.1:9688/contacts/:contactId',
      //  {contactId: '@contactId'},
      //  {update: {method: 'PUT'}, delete: {method: 'DELETE'}});

      var contactResource = dataSource.someMethod();

      contactResource.query(function (data) {
        $scope.contacts = data;
      }, function (error) {
        Notification.error("Error try again");
        $scope.contacts = {};
      });

      $scope.ADDING = false;
      $scope.COUNTER = 2;
      $scope.newContact = {};

      $scope.edit = function (contact) {
        contact.editMode = false;
        contactResource.update({contactId: contact.id}, contact, function () {
            Notification.success(contact.firstName + " " + contact.surname + " updated!");
          },
          function (error) {
            Notification.error("Error try again");
          });
      };

      $scope.saveContact = function () {
        $scope.ADDING = false;
        contactResource.save($scope.newContact, function (data) {
          Notification.success($scope.newContact.firstName + " " + $scope.newContact.surname + " created!");
          $scope.contacts.push(data);
        }, function (error) {
          Notification.error("Error try again")
        });
        $scope.newContact = {};
      };

      $scope.delete = function (contact) {
        contactResource.delete({contactId: contact.id}, function () {
          Notification.success(contact.firstName + " " + contact.surname + " deleted!");
          $scope.contacts = contactResource.query();
        }, function (error) {
          Notification.error("Error try again");
        });
      }
    }
  );
