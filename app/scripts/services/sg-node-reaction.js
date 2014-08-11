'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgNodeReaction
 * @description
 * # sgNodeReaction
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgNodeReaction', function(SgNode) {

    var SgNodeReaction = function() {
      SgNode.apply(this, arguments);
      this.d = 30;
      this.deg = 0;
      this.reactants = [];
      this.products = [];
      this.modifiers = [];
      this.width = 0;
      this.height = 0;
      this.display = {
        stroke: 'black',
        strokeWidth: 3
      };
    };
    SgNodeReaction.prototype = new SgNode();

    SgNodeReaction.prototype.delete = function() {
      _.each(this.model.links, function(links, key) {
        this.model.links[key] = _.filter(links, function(l) {
          var keep = true;
          if (l.source === this || l.target === this) {
            keep = false;
          }
          return keep;
        }, this);
      }, this);

      // Delete reaction node
      delete this.model.nodes.reactions[this.id];
    };

    SgNodeReaction.prototype.getCp = function(num) {
      if (num === 1) {
        return {
          x: this.x + this.d * Math.cos(this.deg / 180 * Math.PI),
          y: this.y - this.d * Math.sin(this.deg / 180 * Math.PI)
        };
      } else if (num === 2) {
        return {
          x: this.x + this.d * Math.cos((this.deg + 180) / 180 * Math.PI),
          y: this.y - this.d * Math.sin((this.deg + 180) / 180 * Math.PI)
        };
      }
    };

    SgNodeReaction.prototype.updateCp1 = function(newPos) {
      var y = this.y - (newPos.y);
      var x = this.x - (newPos.x);
      this.deg = Math.atan(-y / x) * 180 / Math.PI;
    };
    SgNodeReaction.prototype.updateCp2 = function(newPos) {
      var y = this.y - (newPos.y);
      var x = this.x - (newPos.x);
      this.deg = Math.atan(-y / x) * 180 / Math.PI;
    };

    SgNodeReaction.prototype.updateCentroid = function() {
      // update centroids for reactants and products
      this.centroid = {};
      this.centroid.reactants = _.reduce(this.reactants, function(centroid, r) {
        var x = centroid.x + r.x / this.reactants.length;
        var y = centroid.y + r.y / this.reactants.length;
        return {
          x: x,
          y: y
        };
      }, {
        x: 0,
        y: 0
      }, this);
      this.centroid.products = _.reduce(this.products, function(centroid, p) {
        var x = centroid.x + p.x / this.products.length;
        var y = centroid.y + p.y / this.products.length;
        return {
          x: x,
          y: y
        };
      }, {
        x: 0,
        y: 0
      }, this);

      if (!this.fixed) {
        this.deg = 180 / Math.PI * Math.atan(-(this.y - this.centroid.reactants.y) / (this.x - this.centroid.reactants.x));
        if (this.centroid.reactants.x < this.x) {
          this.deg += 180;
        }
      }
    };

    SgNodeReaction.prototype.updatePosition = function() {
      if (!this.fixed) {
        var species = _.union(this.products, this.reactants);
        if (species.length > 1) {
          var sumX = 0;
          var sumY = 0;
          angular.forEach(species, function(s) {
            sumX += s.x;
            sumY += s.y;
          });

          this.x = sumX / species.length;
          this.y = sumY / species.length;
        }
      }
      return this;
    };

    return SgNodeReaction;

  });
