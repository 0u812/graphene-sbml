'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgNodeReaction
 * @description
 * # sgNodeReaction
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgNodeReaction', function (SgNode) {

    var SgNodeReaction = function(){
      SgNode.apply(this, arguments);
      this.d = 30;
      this.deg = 0;
      this.reactants = [];
      this.products = [];
      this.modifiers = [];
    };
    SgNodeReaction.prototype = new SgNode();

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

    return SgNodeReaction;

  });
