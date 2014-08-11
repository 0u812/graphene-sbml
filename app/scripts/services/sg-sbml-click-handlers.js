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
        addReaction(node, 1, 1);
      },
      'addUniBiReaction': function(node) {
        addReaction(node, 1, 2);
      },
      'addBiUniReaction': function(node) {
        addReaction(node, 2, 1);
      },
      'addBiBiReaction': function(node) {
        addReaction(node, 2, 2);
      },
      'selected': function(obj) {
        toggleProperty.apply(this, arguments);
        if (obj.selected) {
          if (obj instanceof SgNode) {
            AppState.selected = obj;
          } else {
            AppState.selected = null;
          }
        }
      },
      'fixed': function() {
        toggleProperty.apply(this, arguments);
      },
    };

    function addReaction(node, numReactants, numProducts) {
      if (node instanceof SgNode) {
        nodeStack.push(node);
        if (nodeStack.length > (numReactants + numProducts - 1)) {
          var newReaction = node.model.createReaction();
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
          _.each(_.range(numReactants + numProducts), function(i) {
            if (i < numReactants) {
              newReaction.addReactant(speciesSbml[i], 1);
            } else {
              newReaction.addProduct(speciesSbml[i], 1);
            }
          });

          var reactionNode = node.model.addReactionNode(newReaction);
          var newLinks = node.model.addReactionLinks(newReaction.data);

          // Replace species nodes with alias nodes in reaction node
          if (aliasNodes.length > 0) {
            node.model.replaceSpeciesWithAliasInReaction(reactionNode, aliasNodes);
          }

          reactionNode.updatePosition();
          reactionNode.updateCentroid();
          _.each(newLinks, function(l) {
            l.update();
          });

          nodeStack = [];
          AppState.clickMode = 'selected';
        }
      }
    }


    // Public API here
    return api;
  });
