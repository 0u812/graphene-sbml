'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlClickHandlers
 * @description
 * # sgSbmlClickHandlers
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('sgSbmlClickHandlers', function(AppState, SgNode, SgLink, SgNodeAlias) {
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
            var speciesSbml = [];
            var aliasNodes = [];

            _.each(nodeStack, function(n) {
              if (n instanceof SgNodeAlias) {
                speciesSbml.push(n.aliasOf.data);
                aliasNodes.push(n);
              } else {
                speciesSbml.push(n.data);
              }
            });
            newReaction.addReactant(speciesSbml[0], 1);
            newReaction.addProduct(speciesSbml[1], 1);

            var reactionNode = this.model.addReactionNode(newReaction);
            var newLinks = this.model.addReactionLinks(newReaction.data);

            // Replace species nodes with alias nodes in reaction node
            if (aliasNodes.length > 0) {
              this.model.replaceSpeciesWithAliasInReaction(reactionNode, aliasNodes);
            }

            reactionNode.updatePosition();
            reactionNode.updateCentroid();
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
