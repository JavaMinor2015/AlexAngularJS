angular.module('angularTestsApp').controller('InviteCtrl',
  function ($scope, $resource, $timeout, contactDataSource) {

    contactDataSource.fetchContacts($scope);

    $scope.sendInvitations = function () {
      console.log('These contacts were invited for "' + $scope.event.title + '":');
      for (var i = 0; i < $scope.contacts.length; i++) {
        var contact = $scope.contacts[i];
        if (contact.isInvited === true) {
          console.log('- ' + contact.firstName + ' ' + contact.surname);
        }
      }
    };
  });
