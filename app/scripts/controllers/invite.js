angular.module('angularTestsApp').controller('InviteCtrl',
  function($scope, $resource, $timeout) {
    var contactResource = $resource('http://127.0.0.1:9688/contacts/:contactId', {
      contactId: '@contactId'
    }, {
      update: { method: 'PUT' }
    });
    $scope.contacts = contactResource.query(function() {}, function(error) {
      handleError();
    });
    $scope.errorHappened = false;
    function handleError() {
      $scope.errorHappened = true;
      $timeout(function() {
        $scope.errorHappened = false;
      }, 3000)
    }
    $scope.sendInvitations = function() {
      console.log('These contacts were invited for "' + $scope.event.title + '":');
      for (var i = 0; i < $scope.contacts.length; i++) {
        var contact = $scope.contacts[i];
        if(contact.isInvited === true) {
          console.log('- ' + contact.firstName + ' ' + contact.surname);
        }
      }
    };
  });
