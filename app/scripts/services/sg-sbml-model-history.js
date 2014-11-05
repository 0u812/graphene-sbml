'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlModelHistory
 * @description
 * # sgSbmlModelHistory
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlModelHistory', function () {
    // Service logic
    // ...

    var SgSbmlModelHistory = function() {
      this.history = [];
    };

    SgSbmlModelHistory.prototype.addHistory = function(model) {
      var self = this;
      if (self.limit && (self.history.length >= self.limit)) {
        self.history.shift();
      }
      var writer = new libsbml.SBMLWriter();
      var sbml = writer.writeSBMLToString(model.sbml);
      self.history.push(sbml);
    };

    SgSbmlModelHistory.prototype.getHistory = function(ind) {
      var self = this;
      if (!_.isNumber(ind)) {
        ind = self.history.length - 1;
      }
      if (ind > -1 && ind < self.history.length) {
        var item = self.history.splice(ind, 1)[0];
        return item;
      } else {
        return false;
      }
    };


    // Public API here
    return SgSbmlModelHistory;
  });
