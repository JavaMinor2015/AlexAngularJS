'use strict';

angular.module('angularTestsApp')
  .factory('contactDataSource', function ($resource, Notification) {

    var contactResource = $resource(
      'http://127.0.0.1:9688/contacts/:contactId',
      {contactId: '@contactId'},
      {update: {method: 'PUT'}, "delete": {method: 'DELETE'}}
    );

    return {
      fetchContacts: function ($scope) {
        contactResource.query(function (data) {
          $scope.contacts = data;
        }, function (error) {
          Notification.error("An error occurred: " + error);
          $scope.contacts = {};
        });
      },

      editContact: function (contact) {
        contact.editMode = false;
        contactResource.update({contactId: contact.id}, contact, function () {
            Notification.success(contact.firstName + " " + contact.surname + " updated!");
          },
          function (error) {
            Notification.error("Error try again");
          });
      },

      saveContact: function ($scope) {
        contactResource.save($scope.newContact, function (data) {
          Notification.success($scope.newContact.firstName + " " + $scope.newContact.surname + " created!");
          $scope.contacts.push(data);
        }, function (error) {
          Notification.error("Error try again")
        });
        $scope.newContact = {};
      },

      deleteContact: function (contact) {
        contactResource.delete({contactId: contact.id}, function () {
          Notification.success(contact.firstName + " " + contact.surname + " deleted!");
        }, function (error) {
          Notification.error("Error try again");
        });
      }
    };
  });
