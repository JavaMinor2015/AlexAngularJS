'use strict';

describe('Service: dataSource', function () {

  // load the service's module
  beforeEach(module('angularTestsApp'));

  // instantiate service
  var dataSource;
  beforeEach(inject(function (_dataSource_) {
    dataSource = _dataSource_;
  }));

  it('should do something', function () {
    expect(!!dataSource).toBe(true);
  });

});
