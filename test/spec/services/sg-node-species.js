'use strict';

describe('Service: sgNodeSpecies', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgNodeSpecies;
  beforeEach(inject(function (_sgNodeSpecies_) {
    sgNodeSpecies = _sgNodeSpecies_;
  }));

  it('should do something', function () {
    expect(!!sgNodeSpecies).toBe(true);
  });

});
