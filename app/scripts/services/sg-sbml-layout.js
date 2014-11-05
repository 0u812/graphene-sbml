'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgLayout
 * @description
 * # sgLayout
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgLayout', function () {

    var SgLayout = function(model){
      this.charge = -700;
      this.linkDistance = 40;
      this.gravity = 0.1;
      this.height = 800;
      this.width = 800;
      this.model = model;

      this.confine = false;

      this.initialize();
    };

    SgLayout.prototype.initialize = function() {

      this.force = d3.layout.force();
      var self = this;
      this.force.on('tick', function() {
        if (self.confine) {
          _.each(self.model.getAllNodes, function(n) {
            n.x = Math.max(n.width, Math.min(this.width -
                                             n.width, n.x));
            n.y = Math.max(n.height, Math.min(this.height -
                                              n.height, n.y));
          });
        }
      });

    };

    SgLayout.prototype.start = function() {

      // Fix for making sure px/py are same as x and y for nodes
      _.each(this.model.getAllNodes(), function(n) {
        n.x = n.x || 100*Math.random();
        n.y = n.y || 100*Math.random();

        n.px = n.x;
        n.py = n.y;
      });

      _.each(this.model.nodes.reactions, function(n) {
        n.updatePosition();
        n.updateCentroid();
      });
      _.each(this.model.getAllLinks(), function(l) {
        l.update();
      });

      this.force
        .charge(this.charge)
        .linkDistance(this.linkDistance)
        .gravity(this.gravity)
        .size([this.width, this.height])
        .nodes(this.model.getAllNodes())
        .links(this.model.getAllLinks())
        .start();
    };

    SgLayout.prototype.addToTick = function(fn) {
      this.force.on('tick', fn);
    };

    return SgLayout;

  });
