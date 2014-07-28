'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgSbmlModel
 * @description
 * # sgSbmlModel
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlModel', function(SgNodeReaction, SgNodeSpecies, SgSbmlLink) {

    var x2js = new X2JS();
    var arrayify = function(s) {
      if (typeof s === 'object') {
        if (s.length) {
          // already an array-like object
          return s;
        } else {
          return [s];
        }
      } else if (typeof s === 'string') {
        return s.split();
      }
    };

    var SgSbmlModel = function(sbmlStr) {
      this.sbml = x2js.xml_str2json(sbmlStr);

      if (!this.sbml.sbml || !this.sbml.sbml.model) {
        // Super basic validation of valid sbml model
        throw new Error('Invalid SBML!');
      }

      this.initialize();

    };

    SgSbmlModel.prototype.initialize = function() {
      this.nodes = {
        species: {},
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
        this.addReactionNode(r);
        this.addReactionLinks(r);
      }, this);

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
      var newNode = new SgNodeSpecies(data._id);
      newNode.data = data;
      try {
        newNode.width = this.size.species.width;
        newNode.height = this.size.species.height;
      } catch(e) {
        console.log('Node sizes not defined');
      }
      this.nodes.species[newNode.id] = newNode;
    };

    SgSbmlModel.prototype.addReactionNode = function(data) {
      var newNode = new SgNodeReaction(data._id);
      newNode.data = data;
      try {
        newNode.width = this.size.reactions.width;
        newNode.height = this.size.reactions.height;
      } catch(e) {
        console.log('Node sizes not defined');
      }
      this.nodes.reactions[newNode.id] = newNode;
    };

    SgSbmlModel.prototype.addReactionLinks = function(reaction) {
      var species;

      var reactionNode  = this.nodes.reactions[reaction._id];

      var reactant = reaction.listOfReactants;
      if (reactant) {
        species = arrayify(reactant.speciesReference);
        _.each(species, function(r) {
          var source = this.nodes.species[r._species];
          var target = reactionNode;
          var link = this.addLink('reactant', source, target);
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
          link.reaction = reactionNode;
          reactionNode.modifiers.push(source);
        }, this);
      }

    };

    SgSbmlModel.prototype.addLink = function(type, source, target) {
      var newLink = new SgSbmlLink(source, target);
      this.links[type].push(newLink);
      return newLink;
    };

    SgSbmlModel.prototype.getAllLinks = function() {
      return _.reduce(this.links, function(result, arr) {
        return result.concat(arr);
      }, []);
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

    return SgSbmlModel;
  });
