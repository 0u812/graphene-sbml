'use strict';

angular.module('sg.graphene.sbml')
  .controller('SbmlLayoutCtrl', function(
    $scope,
    $window,
    sgSbml,
    sgGeo,
    SgSbmlModel,
    SgSbmlModelHistory,
    SgLayout,
    SgLink,
    SgNode,
    AppState,
    sgSbmlClickHandlers
  ) {

    $scope.AppState = AppState;
    $scope.sgGeo = sgGeo;
    $scope._ = _;
    $scope.translate = {
      x: 0,
      y: 0
    };
    $scope.scale = 1;
    $scope.$window = $window;

    $scope.clickHandler = function() {
      sgSbmlClickHandlers[AppState.clickMode].apply($scope, arguments);
    };

    /*
     * Watchers
     */

    $scope.$watch('imports.sbml', function(newVal) {
      if (newVal) {
        $scope.model = new SgSbmlModel(newVal);
        $scope.imports.model = $scope.model;
        $scope.layout = new SgLayout($scope.model);
        $scope.layout.addToTick(function() {
          _.each($scope.model.nodes.species, function(n) {
            n.updatePosition(n);
          });
          $scope.$digest();
        });
        $scope.history = new SgSbmlModelHistory();
        $scope.history.limit = 20;
        $scope.model.subscribeToChanges('AddToHistory', function() {
          $scope.history.addHistory($scope.model);
        });
        if ($scope.model.getSbmlLayout().length) {
        //if ($scope.model.getJdesignerLayout()) {

        } else {
          $scope.layout.start();
        }
      }
    });

    /*
    var linkWatchers = []; // storing node watchers to be removed if unnecessary
    var nodeWatchers = []; // storing node watchers to be removed if unnecessary

    $scope.$watchCollection('model.links', function(val) {
      if (val) {
        _.each($scope.model.links, function(links, key) {
          $scope.$watchCollection('model.links.' + key, function(val) {
            if (val) {
               // unwatch all link watchers
              _.each(linkWatchers, function(w) {
                w();
              });
              linkWatchers = [];
              _.each($scope.model.getAllLinks(), function(l) {
                var watch = $scope.$watch(function() {
                  return l.source.x + l.source.y + l.source.width + l.source.height + l.target.x + l.target.y + l.target.width + l.target.height;
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
    */

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
