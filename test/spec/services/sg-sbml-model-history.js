'use strict';

describe('Service: sgSbmlModelHistory', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlModelHistory;
  beforeEach(inject(function (_sgSbmlModelHistory_) {
    sgSbmlModelHistory = _sgSbmlModelHistory_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlModelHistory).toBe(true);
  });

});
