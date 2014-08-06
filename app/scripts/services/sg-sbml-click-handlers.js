'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlClickHandlers
 * @description
 * # sgSbmlClickHandlers
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('sgSbmlClickHandlers', function(AppState, SgNode, SgLink) {
    // Service logic
    // ...
    var toggleProperty = function(obj, event) {

      if (obj instanceof SgNode || obj instanceof SgLink) {
        if (event) {
          event.stopPropagation();
        }
      }

      var prop = AppState.clickMode;
      if (_.contains(AppState.toggleModes, AppState.clickMode)) {

        var setAllOthers = AppState.clickModeToggleAll[prop];
        if (!_.isUndefined(setAllOthers)) {

          var allObjs = _.union(this.model.getAllNodes(), this.model.getAllLinks());

          if (allObjs) {
            _.each(allObjs, function(n) {
              if (n !== obj) {
                n[prop] = setAllOthers;
              }
            });
          }
        }
        obj[prop] = !obj[prop];
      }
    };

    var nodeStack = [];
    var api = {
      'addSpecies': function($event) {
        var newNode = this.model.addSpeciesNode();
        var clientRect = $event.currentTarget.getBoundingClientRect();
        newNode.x = (($event.pageX - clientRect.left) - this.translate.x) / this.scale;
        newNode.y = (($event.pageY - clientRect.top) - this.translate.y) / this.scale;
      },
      'addUniUniReaction': function(node) {
        if (node instanceof SgNode) {
          nodeStack.push(node);
          console.log(nodeStack);
          if (nodeStack.length > 1) {
            var newReaction = this.model.createReaction();
            newReaction.addReactant(nodeStack[0].data, 1);
            newReaction.addProduct(nodeStack[1].data, 1);

            var newNode = this.model.addReactionNode(newReaction);
            var newLinks = this.model.addReactionLinks(newReaction.data);
            newNode.updatePosition();
            newNode.updateCentroid();
            _.each(newLinks, function(l) {
              l.update();
            });

            nodeStack = [];
          }
        }
      },
      'selected': function() {
        toggleProperty.apply(this, arguments);
      },
      'fixed': function() {
        toggleProperty.apply(this, arguments);
      },
    };


    // Public API here
    return api;
  });
