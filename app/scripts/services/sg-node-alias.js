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

      this.display = {
        stroke: '#0013FF',
        gradient: {
          start: '#B0C0FF',
          stop: '#FFF'
        },
        text: {
          font: 'Georgia',
          size: 10
        }
      };

      this.links = [];
      this.reactions = [];
    };
    SgNodeAlias.prototype = new SgNodeSpecies();

    SgNodeAlias.prototype.delete = function() {
      // Replace all links to alias node to the parent node
      _.each(this.model.links, function(links) {
        _.each(links, function(l) {
          if (l.source === this) {
            l.source = this.aliasOf;
            this.aliasOf.links.push(l);
          }
          if (l.target === this) {
            l.target = this.aliasOf;
            this.aliasOf.links.push(l);
          }
        }, this);
      }, this);

      // Replace species with reactions
      _.each(this.reactions, function(r) {
        this.aliasOf.reactions.push(r);
      }, this);

      // Replace all reactants and products in reaction nodes with parent
      _.each(this.model.nodes.reactions, function(n) {
        _.each(n.reactants, function(r, ind) {
          if (r === this) {
            n.reactants[ind] = this.aliasOf;
          }
        }, this);
        _.each(n.products, function(p, ind) {
          if (p === this) {
            n.products[ind] = this.aliasOf;
          }
        }, this);
      }, this);

      // Update position of parent node
      this.aliasOf.updatePosition(this.aliasOf);

      // Broadcast changes
      this.model.broadcast();

      // Delete node
      delete this.model.nodes.alias[this.id];

    };

    return SgNodeAlias;
  });
