'use strict';

describe('Service: sgSbmlUtils', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlUtils;
  beforeEach(inject(function (_sgSbmlUtils_) {
    sgSbmlUtils = _sgSbmlUtils_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlUtils).toBe(true);
  });

});
