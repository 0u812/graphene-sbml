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
      this.display = {
        stroke: '#FFB800',
        strokeWidth: 3,
        gradient: {
          start: '#FFDC9E',
          stop: '#FFF'
        },
        text: {
          font: 'Georgia',
          size: 10
        }
      };
      this.height = 30;
      this.width = 80;

    };
    SgNodeSpecies.prototype = new SgNode();

    SgNodeSpecies.prototype.updatePosition = function(pos) {
      this.x = pos.x;
      this.y = pos.y;
    };

    SgNodeSpecies.prototype.resizeHeightBottom = function(pos) {
      this.height = 2 * (this.y - pos.y);
    };
    SgNodeSpecies.prototype.resizeHeightTop = function(pos) {
      this.height = 2 * (pos.y - this.y);
    };
    SgNodeSpecies.prototype.resizeWidthLeft = function(pos) {
      this.width = 2 * (this.x - pos.x);
    };
    SgNodeSpecies.prototype.resizeWidthRight = function(pos) {
      this.width = 2 * (pos.x - this.x);
    };

    SgNodeSpecies.prototype.delete = function() {
      // Remove all alias nodes
      _.each(this.model.nodes.alias, function(n) {
        if (n.aliasOf === this) {
          n.delete();
        }
      }, this);

      // Find reactions associated with species node
      var reactions  = _.filter(this.model.nodes.reactions, function(n) {
        return _.contains(_.union(n.reactants, n.products), this);
      }, this);
      // Delete reactions
      _.each(reactions, function(r) {
        delete this.model.nodes.reactions[r.id];
      }, this);

      // Remove links from associated reactions
      _.each(this.model.links, function(links, key) {
        this.model.links[key] = _.filter(links, function(l) {
          var keep = true;
          if (_.contains(reactions, l.source) || _.contains(reactions, l.target)) {
            keep = false;
          }
          return keep;
        }, this);
      }, this);

      // Delete species node
      delete this.model.nodes.species[this.id];

    };

    return SgNodeSpecies;
  });
