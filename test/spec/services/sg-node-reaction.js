'use strict';

describe('Service: sgNodeReaction', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgNodeReaction;
  beforeEach(inject(function (_sgNodeReaction_) {
    sgNodeReaction = _sgNodeReaction_;
  }));

  it('should do something', function () {
    expect(!!sgNodeReaction).toBe(true);
  });

});
