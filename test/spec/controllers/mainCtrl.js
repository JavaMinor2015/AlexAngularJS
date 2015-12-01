describe('Controller: mainCtrl', function () {
  var $controller, $scope, $httpBackend;
  var baseUrl = 'http://127.0.0.1:9688/contacts';

  beforeEach(function () {
    module('angularTestsApp');
    inject(function (_$controller_, $rootScope, _$httpBackend_) {
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
      $scope = $rootScope.$new();
    });
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should retrieve a list of contacts', function () {
// Arrange
    var response = [{}, {}, {}];
    $httpBackend.expectGET(baseUrl).respond(response);
// Act
    $controller('MainCtrl', {$scope: $scope});
    $httpBackend.flush();
// Assert
    expect($scope.contacts.length).toEqual(response.length);
  });

  describe('after instantiation', function () {
    beforeEach(function () {
      $httpBackend.expectGET(baseUrl).respond([{}, {}, {}]);
      $controller('MainCtrl', {$scope: $scope});
      $httpBackend.flush();
    });
    it('should add a contact', function () {
// Arrange
      $scope.newContact = {};
      $httpBackend.expectPOST(baseUrl).respond(201, {});
      var countBefore = $scope.contacts.length;
// Act
      $scope.saveContact();
      $httpBackend.flush();
// Assert
      expect($scope.contacts.length).toBe(countBefore + 1);
    });

    it('should remove a contact', function () {
      var oriContacts = angular.copy($scope.contacts);
      var countBefore = oriContacts.length;

      var cont = {
        id: 4,
        firstName: 'Me',
        surname: 'Myeself',
        email: 'I@muscles.com',
        editMode: false
      };

      $scope.contacts.push(cont);

      $httpBackend.expectDELETE(baseUrl + "/" + cont.id).respond(201, {});
      $httpBackend.expectGET(baseUrl).respond(201, oriContacts);
      $scope.delete(cont);
      $httpBackend.flush();

      expect($scope.contacts.length).toBe(countBefore);
    });

    it('should edit a contact', function () {
      var oriContact = angular.copy($scope.contacts[0]);
      var editedContact = $scope.contacts[0];
      editedContact.firstName = "edited";

      $httpBackend.expectPUT(baseUrl).respond(201, {});
      $scope.edit(editedContact);
      $httpBackend.flush();

      // TODO this is not a test..
    });

  });
});
