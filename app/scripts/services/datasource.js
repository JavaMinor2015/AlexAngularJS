'use strict';

/**
 * @ngdoc service
 * @name angularTestsApp.dataSource
 * @description
 * # dataSource
 * Factory in the angularTestsApp.
 */
angular.module('angularTestsApp')
  .factory('dataSource', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    //$resource(
    //'http://127.0.0.1:9688/contacts/:contactId',
    //{contactId: '@contactId'},
    //{update: {method: 'PUT'}, delete: {method: 'DELETE'}});
    //
    //contactResource.query(function (data) {
    //  $scope.contacts = data;
    //}, function (error) {
    //  Notification.error("Error try again");
    //  $scope.contacts = {};
    //});

    // Public API here
    return {
      someMethod: function () {
        return $resource(
          'http://127.0.0.1:9688/contacts/:contactId',
          {contactId: '@contactId'},
          {update: {method: 'PUT'}, delete: {method: 'DELETE'}});
      }
    };
  });
