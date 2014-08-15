'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgSbmlModel
 * @description
 * # sgSbmlModel
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlModel', function(
    SgNodeReaction,
    SgSbmlReaction,
    SgNodeSpecies,
    SgSbmlLink,
    SgNodeAlias,
    SgSbmlTemplate,
    SgSbmlTranslator,
    SgSbmlUtils,
    idGenerator
  ) {

    var x2js = SgSbmlUtils.x2js;
    var arrayify = SgSbmlUtils.arrayify;
    var setPositionFromAttributes = SgSbmlUtils.setPositionFromAttributes;
    var setDimensionsFromAttributes = SgSbmlUtils.setDimensionsFromAttributes;

    var SgSbmlModel = function(sbmlStr) {
      if (!sbmlStr) {
        this.sbml = SgSbmlTemplate.newTemplate();
      } else {
        this.sbml = x2js.xml_str2json(sbmlStr);
      }

      if (!this.sbml.sbml || !this.sbml.sbml.model) {
        // Super basic validation of valid sbml model
        throw new Error('Invalid SBML!');
      }

      this.initialize();

    };


    SgSbmlModel.prototype.initialize = function() {
      // Create a translator object
      this.translator = new SgSbmlTranslator(this);

      this.nodes = {
        species: {},
        alias: {},
        reactions: {},
        sink: {},
        source: {}
      };
      this.links = {
        reactant: [],
        product: [],
        modifier: [],
        generation: [],
        degradation: [],
        source: [],
        sink: []
      };
      // Create species nodes
      var species = this.getSpecies();
      _.each(species, function(s) {
        this.addSpeciesNode(s);
      }, this);

      // Create reaction nodes and links
      var reactions = this.getReactions();
      _.each(reactions, function(r) {
        var newReaction = this.createReaction(r);
        this.addReactionNode(newReaction);
        this.addReactionLinks(newReaction.data);
      }, this);

    };

    SgSbmlModel.prototype.createReaction = function(r) {
      return new SgSbmlReaction(this, r);
    };

    SgSbmlModel.prototype.getCompartments = function() {

    };

    SgSbmlModel.prototype.getSpecies = function() {
      var model = this.sbml.sbml.model;
      var species = (((model || {}).listOfSpecies || {}).species || {}) || [];
      return arrayify(species);
    };

    SgSbmlModel.prototype.getReactions = function() {
      var model = this.sbml.sbml.model;
      var reactions = (((model || {}).listOfReactions || {}).reaction || {}) || [];
      return arrayify(reactions);
    };

    SgSbmlModel.prototype.getModifiers = function() {

    };

    SgSbmlModel.prototype.addSpeciesNode = function(data) {
      if (!data) {
        data = {
          _id: idGenerator.generateSpeciesId(this),
          _boundaryCondition: false,
          _initialConcentration: 0,
          _compartment: this.sbml.sbml.model.listOfCompartments.compartment[0]._id
        };
      }
      var newNode = new SgNodeSpecies(data._id);
      newNode.data = data;
      newNode.model = this;
      try {
        newNode.width = this.size.species.width;
        newNode.height = this.size.species.height;
      } catch (e) {}
      this.nodes.species[newNode.id] = newNode;
      return newNode;
    };

    SgSbmlModel.prototype.makeAliasNode = function(species, aliasId) {
      var aliasNode;
      if (!aliasId) {
        aliasId = idGenerator.generateAliasId(species.id, this);
      }
      aliasNode = new SgNodeAlias(aliasId);
      this.nodes.alias[aliasId] = aliasNode;
      aliasNode.aliasOf = species;
      aliasNode.width = species.width;
      aliasNode.height = species.height;
      aliasNode.x = species.x + 20;
      aliasNode.y = species.y + 20;

      aliasNode.model = this;
      return aliasNode;
    };

    SgSbmlModel.prototype.addReactionNode = function(reaction) {
      var newNode = new SgNodeReaction(reaction.data._id);
      newNode.sbmlReaction = reaction;
      newNode.data = reaction.data;
      newNode.model = this;
      try {
        newNode.width = this.size.reactions.width;
        newNode.height = this.size.reactions.height;
      } catch (e) {}
      this.nodes.reactions[newNode.id] = newNode;
      return newNode;
    };

    SgSbmlModel.prototype.addReactionLinks = function(reaction) {
      var species;

      var reactionNode = this.nodes.reactions[reaction._id];

      var newLinks = [];

      var reactant = reaction.listOfReactants;
      if (reactant) {
        species = arrayify(reactant.speciesReference);
        _.each(species, function(r) {
          var source = this.nodes.species[r._species];
          var target = reactionNode;
          var link = this.addLink('reactant', source, target);
          newLinks.push(link);
          link.reaction = reactionNode;
          reactionNode.reactants.push(source);
        }, this);
      }

      var product = reaction.listOfProducts;
      if (product) {
        species = arrayify(product.speciesReference);
        _.each(species, function(r) {
          var source = reactionNode;
          var target = this.nodes.species[r._species];
          var link = this.addLink('product', source, target);
          newLinks.push(link);
          link.reaction = reactionNode;
          reactionNode.products.push(target);
        }, this);
      }

      var modifier = reaction.listOfModifiers;
      if (modifier) {
        species = arrayify(modifier.modifierSpeciesReference);
        _.each(species, function(r) {
          var source = this.nodes.species[r._species];
          var target = reactionNode;
          var link = this.addLink('modifier', source, target);
          newLinks.push(link);
          link.reaction = reactionNode;
          reactionNode.modifiers.push(source);
        }, this);
      }

      return newLinks;

    };

    SgSbmlModel.prototype.addLink = function(type, source, target) {
      var newLink = new SgSbmlLink(source, target);
      newLink.model = this;
      this.links[type].push(newLink);
      return newLink;
    };

    SgSbmlModel.prototype.getAllLinks = function() {
      return _.reduce(this.links, function(result, arr) {
        return result.concat(arr);
      }, []);
    };

    SgSbmlModel.prototype.getAllLinksForReaction = function(reactionNode) {
      if (_.isString(reactionNode)) {
        reactionNode = this.nodes.reactions[reactionNode];
      }
      var links = this.getAllLinks();
      return _.filter(links, function(l) {
        return (_.isEqual(l.source, reactionNode) || _.isEqual(l.target, reactionNode));
      });
    };

    SgSbmlModel.prototype.getAllNodes = function() {
      return _.reduce(_.pluck(this.nodes), function(result, arr) {
        return result.concat(_.pluck(arr));
      }, []);
    };

    SgSbmlModel.prototype.setNodeSize = function(size) {
      this.size = size;
      _.each(size, function(s, type) {
        _.each(this.nodes[type], function(n) {
          n.height = s.height;
          n.width = s.width;
        }, this);
      }, this);
    };


    SgSbmlModel.prototype.getJdesignerLayout = function() {
      var layout = this.sbml.sbml.model.annotation.JDesignerLayout;

      if (!layout) {
        return false;
      }

      _.each(layout.listOfSpecies.species, function(s) {
        var bb = s.boundingBox;
        var id = s._id;
        setPositionFromAttributes(this.nodes.species[id], bb);

        // Handle Alias nodes
        if (s.listOfAliasNodes) {
          var aliases = arrayify(s.listOfAliasNodes.alias);
          _.each(aliases, function(item) {
            var newAliasNode = this.makeAliasNode(this.nodes.species[id], item._name);
            setPositionFromAttributes(newAliasNode, item);
          }, this);
        }

      }, this);

      _.each(arrayify(layout.listOfReactions.reaction), function(r) {
        var reactionNode = this.nodes.reactions[r._id];
        var aliasNodes = [];

        // Check products
        _.each(arrayify(r.listOfProducts.speciesReference), function(p) {
          if (p.aliasRef) {
            var aliasNode = this.nodes.alias[p.aliasRef._aliasRef];
            aliasNodes.push(aliasNode);
          }
        }, this);

        // Check reactants
        _.each(arrayify(r.listOfReactants.speciesReference), function(p) {
          if (p.aliasRef) {
            var aliasNode = this.nodes.alias[p.aliasRef._aliasRef];
            aliasNodes.push(aliasNode);
          }
        }, this);

        // Rewire all links to point to alias nodes
        this.replaceSpeciesWithAliasInReaction(reactionNode, aliasNodes);

      }, this);


      _.each(this.nodes.reactions, function(n) {
        n.updatePosition();
        n.updateCentroid();
      });

      _.each(this.getAllLinks(), function(l) {
        l.update();
      });


      return layout;

    };

    SgSbmlModel.prototype.getSbmlLayout = function() {
      var layout = SgSbmlUtils.ensureExists(this.sbml.sbml.model, ['annotation', 'listOfLayouts']).layout;

      if (!layout) {
        return false;
      } else {
        layout = layout[0];
      }

      _.each(arrayify(layout.listOfSpeciesGlyphs.speciesGlyph), function(s) {
        var bb = s.boundingBox;
        var glyphId = s._id;
        var speciesId = s._species;
        var node = this.nodes.species[speciesId]; // Parent node
        if (node.glyphId) {
          // Create alias because already assigned glyph to parent
          node = this.makeAliasNode(node, glyphId);
        }
        node.glyphId = glyphId;

        setPositionFromAttributes(node, bb.position);
        setDimensionsFromAttributes(node, bb.dimensions);
      }, this);

      _.each(arrayify(layout.listOfReactionGlyphs.reactionGlyph), function(r) {
        var aliasNodes = [];
        var reactionNode = this.nodes.reactions[r._reaction];
        reactionNode.glyphId = r._id;

        // Check for alias nodes to re-wire
        _.each(arrayify(r.listOfSpeciesReferenceGlyphs.speciesReferenceGlyph), function(s) {
          var alias = _.find(this.nodes.alias, {
            glyphId: s._speciesGlyph
          });
          if (alias) {
            aliasNodes.push(alias);
          }
        }, this);

        // Rewire all links to point to alias nodes
        this.replaceSpeciesWithAliasInReaction(reactionNode, aliasNodes);

      }, this);

      // Update species node styles
      var renderInformation = arrayify(layout.annotation.listOfRenderInformation.renderInformation)[0];
      var lookup = {
        gradient: _.indexBy(arrayify(renderInformation.listOfGradientDefinitions.linearGradient), '_id'),
        color: _.indexBy(arrayify(renderInformation.listOfColorDefinitions.colorDefinition), '_id'),
        glyph: _.indexBy(_.union(_.toArray(this.nodes.species), _.toArray(this.nodes.alias)), 'glyphId')
      };
      _.each(renderInformation.listOfStyles.style, function(style) {
        if (style._idList) {
          var r = style.g.rectangle;
          var nodes = _.map(style._idList.split(' '), function(id) {
            return lookup.glyph[id];
          });
          _.each(nodes, function(node) {
            if (node) {
              node.display.stroke = lookup.color[r._stroke]._value;
              node.display.strokeWidth = parseInt(r['_stroke-width'], 10);
              if (lookup.gradient[r._fill]) {
                node.display.gradient.start = lookup.gradient[r._fill].stop[0]['_stop-color'];
                node.display.gradient.stop = lookup.gradient[r._fill].stop[1]['_stop-color'];
              } else if (lookup.color[r._fill]) {
                node.display.gradient.start = lookup.color[r._fill]._value;
                node.display.gradient.stop = lookup.color[r._fill]._value;
              }
            }
          });
        }
      });

      _.each(this.nodes.reactions, function(n) {
        n.updatePosition();
        n.updateCentroid();
      });

      _.each(this.getAllLinks(), function(l) {
        l.update();
      });

      return layout;

    };

    SgSbmlModel.prototype.replaceSpeciesWithAliasInReaction = function(reactionNode, aliasNodes) {
      var links = this.getAllLinksForReaction(reactionNode);

      var speciesWithAliases = _.pluck(aliasNodes, 'aliasOf');
      _.each(links, function(l) {
        var sInd = _.indexOf(speciesWithAliases, l.source);
        if (sInd > -1) {
          l.source = aliasNodes[sInd];
        }
        var tInd = _.indexOf(speciesWithAliases, l.target);
        if (tInd > -1) {
          l.target = aliasNodes[tInd];
        }
      });

      // Switch reactants and products array nodes with aliases as well
      _.each(reactionNode.reactants, function(n, ind) {
        var sInd = _.indexOf(speciesWithAliases, n);
        if (sInd > -1) {
          reactionNode.reactants[ind] = aliasNodes[sInd];
        }
      });
      _.each(reactionNode.products, function(n, ind) {
        var sInd = _.indexOf(speciesWithAliases, n);
        if (sInd > -1) {
          reactionNode.products[ind] = aliasNodes[sInd];
        }
      });

    };


    return SgSbmlModel;
  });
