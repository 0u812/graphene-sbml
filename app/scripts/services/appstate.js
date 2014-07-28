'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.AppState
 * @description
 * # AppState
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('AppState', function () {
    // Service logic
    // ...

    var api = {
      clickMode: 'selected',
      clickModeToggleAll: {
        'selected': false,
      }
    };

    // Public API here
    return api;
  });
