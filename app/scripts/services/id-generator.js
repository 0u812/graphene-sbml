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
      var id = baseId + increment;
      while (_.contains(allIds, id)) {
        increment += 1;
        id = baseId + increment;
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
      },
      generateReactionId: function(model) {
        var baseId = 'R';
        return newId(baseId, model);
      },
    };

    // Public API here
    return api;
  });
