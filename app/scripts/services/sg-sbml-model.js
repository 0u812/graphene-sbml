'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgSbmlModel
 * @description
 * # sgSbmlModel
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlModel', function(SgNodeReaction, SgNodeSpecies, SgLink, sgGeo) {

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
      var newLink = new SgLink(source, target);
      this.links[type].push(newLink);
      return newLink;
    };

    SgSbmlModel.prototype.updateLinkPosition = function(link) {
      var reactionPosition = this.getReactionPosition(link);
      var reactionNode = link.reaction;
      reactionNode.x = reactionPosition.x;
      reactionNode.y = reactionPosition.y;

      var sourceSpacer, targetSpacer;
      if (_.isEqual(link.source.width, 0)) {
        sourceSpacer = 0;
      } else {
        sourceSpacer = 8;
      }
      if (_.isEqual(link.target.width, 0)) {
        targetSpacer = 0;
      } else {
        targetSpacer = 15;
      }
      var targetToSource = sgGeo.getLineIntersectionWithRectangle({
        x1: link.target.x,
        y1: link.target.y,
        x2: link.source.x,
        y2: link.source.y
      }, {
        x1: link.source.x - (link.source.width / 2 + sourceSpacer),
        y1: link.source.y - (link.source.height / 2 + sourceSpacer),
        x2: link.source.x + (link.source.width / 2 + sourceSpacer),
        y2: link.source.y + (link.source.height / 2 + sourceSpacer)
      });
      var sourceToTarget = sgGeo.getLineIntersectionWithRectangle({
        x1: link.source.x,
        y1: link.source.y,
        x2: link.target.x,
        y2: link.target.y
      }, {
        x1: link.target.x - (link.target.width / 2 + targetSpacer),
        y1: link.target.y - (link.target.height / 2 + targetSpacer),
        x2: link.target.x + (link.target.width / 2 + targetSpacer),
        y2: link.target.y + (link.target.height / 2 + targetSpacer)
      });

      if (_.contains(link.classes, 'modifier')) {
        var newPoint = sgGeo.extendPoint(targetToSource, sourceToTarget, -15);
        link.x1 = targetToSource.x;
        link.y1 = targetToSource.y;
        link.x2 = newPoint.x;
        link.y2 = newPoint.y;
        link.cp1 = sgGeo.extendPoint(sourceToTarget, targetToSource, -20);
        link.cp2 = sgGeo.extendPoint(targetToSource, sourceToTarget, -20);
      } else {
        link.x1 = targetToSource.x;
        link.y1 = targetToSource.y;
        link.x2 = sourceToTarget.x;
        link.y2 = sourceToTarget.y;
        link.cp1 = sgGeo.extendPoint(sourceToTarget, targetToSource, -20);
        link.cp2 = sgGeo.extendPoint(targetToSource, sourceToTarget, -20);
      }
    };

    SgSbmlModel.prototype.updateReactionNode = function(n) {
      // update centroids for reactants and products
      n.centroid = {};
      n.centroid.reactants = _.reduce(n.reactants, function(centroid, r) {
        var x = centroid.x + r.x / n.reactants.length;
        var y = centroid.y + r.y / n.reactants.length;
        return {
          x: x,
          y: y
        };
      }, {
        x: 0,
        y: 0
      });
      n.centroid.products = _.reduce(n.products, function(centroid, p) {
        var x = centroid.x + p.x / n.products.length;
        var y = centroid.y + p.y / n.products.length;
        return {
          x: x,
          y: y
        };
      }, {
        x: 0,
        y: 0
      });

      n.deg = 180 / Math.PI * Math.atan((n.y - n.centroid.reactants.y) / (n.centroid.reactants.x - n.x));
      if (n.centroid.reactants.x < n.x) {
        n.deg += 180;
      }
    };

    SgSbmlModel.prototype.getReactionPosition = function(link) {
      var reaction = link.reaction;
      var species = _.union(reaction.products, reaction.reactants);
      if (species.length <= 1) {
        return reaction;
      } else {

        var sumX = 0;
        var sumY = 0;
        angular.forEach(species, function(s) {
          sumX += s.x;
          sumY += s.y;
        });
        return {
          x: sumX / species.length,
          y: sumY / species.length
        };
      }
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
