'use strict';

describe('Service: sgSbmlClickHandlers', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlClickHandlers;
  beforeEach(inject(function (_sgSbmlClickHandlers_) {
    sgSbmlClickHandlers = _sgSbmlClickHandlers_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlClickHandlers).toBe(true);
  });

});
