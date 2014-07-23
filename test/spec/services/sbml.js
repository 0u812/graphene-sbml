'use strict';

describe('Service: sbml', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sbml;
  beforeEach(inject(function (_sbml_) {
    sbml = _sbml_;
  }));

  it('should do something', function () {
    expect(!!sbml).toBe(true);
  });

});
