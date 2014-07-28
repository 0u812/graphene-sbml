'use strict';

angular.module('sg.graphene.sbml')
  .controller('SbmlLayoutCtrl', function($scope, sgSbml, sgGeo, SgSbmlModel, SgLayout) {

    $scope.textVisibilityLookup = {
      species: true,
      reaction: false
    };

    $scope.lookupMarkerId = function(classes) {
      if (_.every(classes, function(c) {
        return _.contains(['reaction', 'production'], c);
      })) {
        return 'reactionProduction';
      } else if (_.every(classes, function(c) {
        return _.contains(['reaction', 'production'], c);
      })) {
        return 'reactionConsumption';
      }
    };

    $scope.linkArc = sgGeo.linkArc;
    $scope.extendPoint = sgGeo.extendPoint;
    $scope.arrow = sgGeo.arrow;

    $scope.clickLink = function(link) {
      _.each($scope.model.nodes.reactions, function(r) {
        r.selected = false;
      });
      link.reaction.selected = true;
    };

    $scope.clickNode = function(node) {
      _.each($scope.model.nodes.reactions, function(r) {
        r.selected = false;
      });
      node.selected = true;
    };


    /*
     * Watchers
     */

    $scope.$watch('imports.sbml', function(newVal) {
      if (newVal) {
        $scope.model = new SgSbmlModel(newVal);
        $scope.model.setNodeSize({
          species: {
            height: 30,
            width: 80
          },
          reactions: {
            height: 0,
            width: 0
          }
        });
        $scope.layout = new SgLayout(
          $scope.model.getAllNodes(),
          $scope.model.getAllLinks()
        );
        $scope.layout.addToTick(function() {
          $scope.$digest();
          $scope.started = true;
        });
        $scope.layout.start();
      }
    });

    var linkWatchers = []; // storing node watchers to be removed if unnecessary
    var nodeWatchers = []; // storing node watchers to be removed if unnecessary

    $scope.$watchCollection('model.links', function(val) {
      if (val) {
        /*
         * unwatch all link watchers
         */
        _.each(linkWatchers, function(w) {
          w();
        });
        linkWatchers = [];
        _.each($scope.model.getAllLinks(), function(l) {
          var watch = $scope.$watch(function() {
            return l.source.x + l.source.y + l.target.x + l.target.y;
          }, function() {
            if ($scope.started) {
              l.update();
            }
          });
          l.update();
          linkWatchers.push(watch);
        });
      }
    });

    $scope.$watchCollection('model.nodes', function(val) {
      if (val) {
        _.each(nodeWatchers, function(w) {
          w();
        });
        nodeWatchers = [];

        _.each($scope.model.nodes.reactions, function(n) {
          var watch = $scope.$watch(function() {
            var total = 0;
            _.each(n.reactants, function(r) {
              total += r.x + r.y;
            });
            _.each(n.products, function(p) {
              total += p.x + p.y;
            });
            return total;
          }, function() {
            if ($scope.started) {
              n.update();
            }
          });
          nodeWatchers.push(watch);
        });
      }
    });

    // var watchList = ['charge', 'linkDistance', 'gravity'];
    // _.each(watchList, function(w) {
    //   $scope.$watch(w, function(newVal) {
    //     if (newVal && $scope.ngModel) {
    //       if ($scope.force) {
    //         console.log('Change %s to ' + newVal, w);
    //         $scope.force[w](newVal).start();
    //       }
    //     }
    //   });
    // });

    // var watchListRestart = ['linkModifiers', 'max.links', 'width', 'height'];
    // _.each(watchListRestart, function(w) {
    //   $scope.$watch(w, function(newVal) {
    //     if (newVal && $scope.ngModel) {
    //       $scope.force = runForceLayout();
    //     }
    //   }, true);
    // });

  });
