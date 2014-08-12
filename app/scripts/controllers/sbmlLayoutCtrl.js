'use strict';

angular.module('sg.graphene.sbml')
  .controller('SbmlLayoutCtrl', function($scope, sgSbml, sgGeo, SgSbmlModel, SgLayout, SgLink, SgNode, AppState, sgSbmlClickHandlers) {

    $scope.AppState = AppState;
    $scope.sgGeo = sgGeo;
    $scope._ = _;

    $scope.clickHandler = function() {
      sgSbmlClickHandlers[AppState.clickMode].apply($scope, arguments);
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
        $scope.layout = new SgLayout($scope.model);
        $scope.layout.addToTick(function() {
          $scope.$digest();
        });
        if ($scope.model.getSbmlLayout()) {
        //if ($scope.model.getJdesignerLayout()) {

        } else {
          $scope.layout.start();
        }
      }
    });

    var linkWatchers = []; // storing node watchers to be removed if unnecessary
    var nodeWatchers = []; // storing node watchers to be removed if unnecessary

    $scope.$watchCollection('model.links', function(val) {
      if (val) {
        _.each($scope.model.links, function(links, key) {
          $scope.$watchCollection('model.links.' + key, function(val) {
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
                }, function(val) {
                  if (val) {
                    l.update();
                    l.reaction.updatePosition();
                  }
                });
                l.update();
                l.reaction.updatePosition();
                linkWatchers.push(watch);
              });
            }
          });
        });
      }
    });

    $scope.$watchCollection('model.nodes', function(val) {
      if (val) {
        _.each($scope.model.nodes, function(nodes, key) {
          $scope.$watchCollection('model.nodes.' + key, function(val) {
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
                  n.updateCentroid();
                });
                nodeWatchers.push(watch);
              });
            }
          });
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
