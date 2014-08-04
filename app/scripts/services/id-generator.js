'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.idGenerator
 * @description
 * # idGenerator
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('idGenerator', function() {
    // Service logic
    // ...
    function newId(baseId, model) {
      var increment = 0;
      var allIds = _.pluck(model.getAllNodes(), 'id');
      var id = baseId + '_' + increment;
      while (_.contains(allIds, id)) {
        increment += 1;
        id = baseId + '_' + increment;
      }
      return id;
    }

    var api = {
      generateAliasId: function(origId, model) {
        return newId(origId, model);
      },
      generateSpeciesId: function(model) {
        var baseId = 'S';
        return newId(baseId, model);
      }
    };

    // Public API here
    return api;
  });
