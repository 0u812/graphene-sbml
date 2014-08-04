'use strict';

describe('Service: idGenerator', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var idGenerator;
  beforeEach(inject(function (_idGenerator_) {
    idGenerator = _idGenerator_;
  }));

  it('should do something', function () {
    expect(!!idGenerator).toBe(true);
  });

});
