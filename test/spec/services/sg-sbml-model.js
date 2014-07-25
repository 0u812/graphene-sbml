'use strict';

describe('Service: sgSbmlModel', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlModel;
  beforeEach(inject(function (_sgSbmlModel_) {
    sgSbmlModel = _sgSbmlModel_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlModel).toBe(true);
  });

});
