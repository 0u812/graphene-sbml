'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlTranslator
 * @description
 * # sgSbmlTranslator
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlTranslator', function () {
    // Service logic
    // ...

    //var x2js = new X2JS();

    var SgSbmlTranslator = function(model) {
      this.model = model;
    };

    SgSbmlTranslator.prototype.getSbml = function() {
      // update species
      var listOfSpecies = this.model.sbml.sbml.model.listOfSpecies;
      listOfSpecies.species = [];
      _.each(this.model.nodes.species, function(s) {
        listOfSpecies.species.push(s.data);
      });
      // update reactions
      var listOfReactions = this.model.sbml.sbml.model.listOfReactions;
      listOfReactions.reactions = [];
      _.each(this.model.nodes.reactions, function(r) {
        listOfReactions.reactions.push(r.data);
      });

      // update layout/render annotation
      var layout = this.model.sbml.sbml.model.annotation

      return this.model.sbml;
    };

    function ensureExists(obj, propertyArray) {
      _.each(propertyArray, function(prop) {
        if (!obj[prop]) {
          obj[prop] = {};
        }
        obj = obj[prop];
      });
      return obj;
    };

    // Public API here
    return SgSbmlTranslator;
  });
