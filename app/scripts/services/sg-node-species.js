'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgNodeSpecies
 * @description
 * # sgNodeSpecies
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgNodeSpecies', function (SgNode) {

    var SgNodeSpecies = function() {
      SgNode.apply(this, arguments);
    };
    SgNodeSpecies.prototype = new SgNode();

    return SgNodeSpecies;
  });
