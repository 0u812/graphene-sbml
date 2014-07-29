'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgNodeSpecies
 * @description
 * # sgNodeSpecies
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgNodeAlias', function (SgNodeSpecies) {

    var SgNodeAlias = function() {
      SgNodeSpecies.apply(this, arguments);
    };
    SgNodeAlias.prototype = new SgNodeSpecies();

    return SgNodeAlias;
  });
