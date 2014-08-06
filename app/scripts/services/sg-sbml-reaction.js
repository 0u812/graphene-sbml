'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlReaction
 * @description
 * # sgSbmlReaction
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlReaction', function(idGenerator) {
    var arrayify = function(s) {
      if (typeof s === 'object') {
        if (!_.isUndefined(s.length)) {
          // already an array-like object
          return s;
        } else {
          return [s];
        }
      } else if (typeof s === 'string') {
        return s.split();
      }
    };

    var SgSbmlReaction = function(model, data) {
      this.model = model;
      if (!data) {
        // Default reaction
        data = {
          'listOfReactants': {
            'speciesReference': []
          },
          'listOfProducts': {
            'speciesReference': []
          },
          '_id': idGenerator.generateReactionId(model),
          '_reversible': 'false'
        };
      }
      if (!data.listOfReactants || !data.listOfReactants.speciesReference) {
        data.listOfReactants = {
          speciesReference: []
        };
      }
      data.listOfReactants.speciesReference = arrayify(data.listOfReactants.speciesReference);
      if (!data.listOfProducts || !data.listOfProducts.speciesReference) {
        data.listOfProducts = {
          speciesReference: []
        };
      }
      data.listOfProducts.speciesReference = arrayify(data.listOfProducts.speciesReference);

      this.data = data;
    };


    SgSbmlReaction.prototype.addReactant = function(species, stoichiometry) {
      this.data.listOfReactants.speciesReference.push({
        '_species': species._id,
        '_stoichiometry': stoichiometry
      });
    };

    SgSbmlReaction.prototype.addProduct = function(species, stoichiometry) {
      this.data.listOfProducts.speciesReference.push({
        '_species': species._id,
        '_stoichiometry': stoichiometry
      });
    };

    // Public API here
    return SgSbmlReaction;
  });
