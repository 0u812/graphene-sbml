'use strict';

describe('Service: sgSbmlTemplate', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlTemplate;
  beforeEach(inject(function (_sgSbmlTemplate_) {
    sgSbmlTemplate = _sgSbmlTemplate_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlTemplate).toBe(true);
  });

});
