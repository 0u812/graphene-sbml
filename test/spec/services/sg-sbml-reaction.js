'use strict';

describe('Service: sgSbmlReaction', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlReaction;
  beforeEach(inject(function (_sgSbmlReaction_) {
    sgSbmlReaction = _sgSbmlReaction_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlReaction).toBe(true);
  });

});
