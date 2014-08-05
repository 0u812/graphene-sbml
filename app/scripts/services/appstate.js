'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.AppState
 * @description
 * # AppState
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('AppState', function() {
    // Service logic
    // ...

    var api = {
      menu: {
        layout: false
      },
      clickMode: 'selected',
      toggleModes: ['selected', 'fixed'],
      clickModeToggleAll: {
        'selected': false,
      },
      lookupMarkerId: function(classes) {
        if (_.every(classes, function(c) {
          return _.contains(['reaction', 'production'], c);
        })) {
          return 'reactionProduction';
        } else if (_.every(classes, function(c) {
          return _.contains(['reaction', 'production'], c);
        })) {
          return 'reactionConsumption';
        }
      },
      zoom: true
    };

    // Public API here
    return api;
  });
