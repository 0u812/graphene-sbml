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

    SgNodeAlias.prototype.delete = function() {
      // Replace all links to alias node to the parent node
      _.each(this.model.links, function(links, key) {
        this.model.links[key] = _.each(links, function(l) {
          if (l.source === this) {
            l.source = this.aliasOf;
          }
          if (l.target === this) {
            l.target = this.aliasOf;
          }
        }, this);
      }, this);

      // Delete node
      delete this.model.nodes.alias[this.id];

    };

    return SgNodeAlias;
  });
