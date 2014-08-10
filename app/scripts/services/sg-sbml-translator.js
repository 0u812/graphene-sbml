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

      return this.model.sbml;
    };

    // Public API here
    return SgSbmlTranslator;
  });
