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

    // Public API here
    return SgSbmlModelHistory;
  });
