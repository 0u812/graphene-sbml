'use strict';

describe('Service: sgSbmlTranslator', function () {

  // load the service's module
  beforeEach(module('grapheneSbmlApp'));

  // instantiate service
  var sgSbmlTranslator;
  beforeEach(inject(function (_sgSbmlTranslator_) {
    sgSbmlTranslator = _sgSbmlTranslator_;
  }));

  it('should do something', function () {
    expect(!!sgSbmlTranslator).toBe(true);
  });

});
