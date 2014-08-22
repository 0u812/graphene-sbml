'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlTranslator
 * @description
 * # sgSbmlTranslator
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlTranslator', function(SgSbmlUtils) {
    // Service logic
    // ...

    //var x2js = new X2JS();

    var SgSbmlTranslator = function(model) {
      this.model = model;
    };

    SgSbmlTranslator.prototype.getSbml = function() {
      var copiedSbml = angular.copy(this.model.sbml);
      var model = copiedSbml.sbml.model;
      // update species
      var listOfSpecies = model.listOfSpecies;
      listOfSpecies.species = [];
      _.each(this.model.nodes.species, function(s) {
        listOfSpecies.species.push(s.data);
      });
      // update reactions
      var listOfReactions = model.listOfReactions;
      listOfReactions.reaction = [];
      _.each(this.model.nodes.reactions, function(r) {
        listOfReactions.reaction.push(r.data);
      });

      // update layout/render annotation
      var layout = SgSbmlUtils.ensureExists(model, ['annotation', 'listOfLayouts', 'layout']);
      layout = SgSbmlUtils.arrayify(layout); // assign to first layout
      if (_.isArray(layout) && layout.length) {
        // get first layout
        layout = layout[0];
      } else {
        model.annotation.listOfLayouts.layout = {};
        layout = model.annotation.listOfLayouts.layout;
      }
      layout._id = layout._id || 'GrapheneLayout';
      layout.dimensions = {
        _width: _.max(_.pluck(this.model.nodes.species, 'x')),
        _height: _.max(_.pluck(this.model.nodes.species, 'y'))
      };

      // Get a handle to the species glyphs
      var listOfSpeciesGlyphs = SgSbmlUtils.ensureExists(layout, ['listOfSpeciesGlyphs']);
      listOfSpeciesGlyphs.speciesGlyph = [];

      // Get a handle to the text glyphs
      var listOfTextGlyphs = SgSbmlUtils.ensureExists(layout, ['listOfTextGlyphs']);
      listOfTextGlyphs.textGlyph = [];

      // Get a handle to the reaction glyphs
      var listOfReactionGlyphs = SgSbmlUtils.ensureExists(layout, ['listOfReactionGlyphs']);
      listOfReactionGlyphs.reactionGlyph = [];

      /*
      // Get a handle to species rendering style
      var listOfRenderStyles = SgSbmlUtils.ensureExists(layout, ['annotation', 'listOfRenderStyles']);
      listOfRenderStyles = {
        _xmlns: 'http://sys-bio.org/xml/render/level1',
        renderStyle: {
          _id: 'RenderStyle',
          fillStyle: {
            _fillType: 'Solid',
            _startColor: '#FFFFFF',
          },
          listOfSpeciesStyles: {
            speciesStyle: []
          },
          listOfTextStyles: {
            textStyle: []
          }
        }
      };
      */

      // Get a handle to rendering information
      var listOfRenderInformation = SgSbmlUtils.ensureExists(layout, ['annotation', 'listOfRenderInformation']);
      listOfRenderInformation._xmlns = 'http://projects.eml.org/bcb/sbml/render/level2';
      listOfRenderInformation.renderInformation = {
        _id: 'Graphene-SBML',
        listOfStyles: {
          style: []
        },
        listOfGradientDefinitions: {
          linearGradient: []
        }
      };
      var listOfStyles = SgSbmlUtils.ensureExists(listOfRenderInformation, [
        'renderInformation',
        'listOfStyles'
      ]);
      listOfStyles.style = [];
      var styles = listOfStyles.style;
      var listOfGradients = SgSbmlUtils.ensureExists(
        listOfRenderInformation,
        [
          'renderInformation',
          'listOfGradientDefinitions'
        ]
      );
      listOfGradients.linearGradient= [];
      var gradients = listOfGradients.linearGradient;

      _.each(_.union(_.values(this.model.nodes.species), _.values(this.model.nodes.alias)), function(s) {
        var bb = {
          dimensions: {
            _height: s.height,
            _width: s.width
          },
          position: {
            _x: s.x,
            _y: s.y
          }
        };

        var speciesGlyphId = 'sGlyph-' + s.id;
        var textGlyphId = 'tGlyph-' + s.id;
        var gradientId = 'gradient-' + s.id;

        if (s.aliasOf) {
          listOfSpeciesGlyphs.speciesGlyph.push({
            _id: speciesGlyphId,
            _species: s.aliasOf.data._id,
            boundingBox: bb
          });
          listOfTextGlyphs.textGlyph.push({
            _id: textGlyphId,
            _graphicalObject: speciesGlyphId,
            _text: s.aliasOf.data._name || s.aliasOf.data._id,
            boundingBox: bb
          });
        } else {
          listOfSpeciesGlyphs.speciesGlyph.push({
            _id: speciesGlyphId,
            _species: s.data._id,
            boundingBox: bb
          });
          listOfTextGlyphs.textGlyph.push({
            _id: textGlyphId,
            _graphicalObject: speciesGlyphId,
            _text: s.data._name || s.data._id,
            boundingBox: bb
          });
        }


        styles.push({
          _idList: speciesGlyphId,
          g: {
            rectangle: {
              _fill: gradientId,
              _height: s.height,
              _width: s.width,
              _stroke: s.display.stroke,
              '_stroke-width': s.display.strokeWidth
            }
          }
        });
        gradients.push({
          _id: gradientId,
          stop: [{
            _offset: '0%',
            '_stop-color': s.display.gradient.start
          }, {
            _offset: '100%',
            '_stop-color': s.display.gradient.stop
          }]
        });
        // text glyph style
        styles.push({
          _idList: textGlyphId,
          g: {
            '_font-family': s.display.text.font,
            '_font-size': s.display.text.size,
            '_stroke': s.display.text.color || 'black',
            '_text-anchor': 'middle',
            '_vtext-anchor': 'top'
          }
        });

        /*
        listOfRenderStyles.renderStyle.listOfSpeciesStyles.speciesStyle.push({
          _id: 'sStyle-' + s.data._id,
          _reference: 'sGlyph-' + s.data._id,
          listOfShapes: {
            shape: {
              _kind: 'RoundedRectangle',
              boundingBox: bb,
              edgeStyle: {
                _color: s.display.stroke,
                _style: 'Solid',
                _thickness: s.display.strokeWidth
              },
              fillStyle: {
                _startColor: s.display.gradient.start,
                _endColor: s.display.gradient.end,
                _gradientStyle: 'Horizontal',
                _fillType: 'LinearGradient'
              }
            }
          }
        });

        listOfRenderStyles.renderStyle.listOfTextStyles.textStyle.push({
          fontStyle: {
            _id: 'tStyle-' + s.data._id,
            _reference: 'tGlyph-' + s.data._id,
            _calculateSize: 'False',
            _font: s.display.text.font,
            _size: s.display.text.size,
            fillStyle: {
              _fillType: 'Solid',
              _startColor: '#000000'
            }
          }
        });
        */
      });

      _.each(this.model.nodes.reactions, function(r) {
        var reactionGlyphId = 'rGlyph-' + r.id;
        var bb = {
          dimensions: {
            _height: r.height,
            _width: r.width
          },
          position: {
            _x: r.x,
            _y: r.y
          }
        };

        var reactionGlyph = {
          _id: reactionGlyphId,
          _reaction: r.data._id,
          boundingBox: bb,
          listOfSpeciesReferenceGlyphs: {
            speciesReferenceGlyph: []
          }
        };
        listOfReactionGlyphs.reactionGlyph.push(reactionGlyph);

        _.each(r.reactants, function(reactant, i) {
          var speciesReference;
          if (reactant.aliasOf) {
            speciesReference = reactant.aliasOf.data._id;
          } else {
            speciesReference = reactant.data._id;
          }
          reactionGlyph.listOfSpeciesReferenceGlyphs.speciesReferenceGlyph.push({
            _id: 'sReference-' + r.id + '-' + reactant.id + '-' + i,
            _role: 'substrate',
            _speciesGlyph: 'sGlyph-' + reactant.id,
            _speciesReference: speciesReference,
            '_xmlns:render': 'http://projects.eml.org/bcb/sbml/render/level2',
            boundingBox: {
              position: {
                _x: 0,
                _y: 0
              },
              dimensions: {
                _width: 0,
                _height: 0
              }
            }
          });
        });
        _.each(r.products, function(product, i) {
          var speciesReference;
          if (product.aliasOf) {
            speciesReference = product.aliasOf.data._id;
          } else {
            speciesReference = product.data._id;
          }
          reactionGlyph.listOfSpeciesReferenceGlyphs.speciesReferenceGlyph.push({
            _id: 'sReference-' + r.id + '-' + product.id + '-' + i,
            _role: 'product',
            _speciesGlyph: 'sGlyph-' + product.id,
            _speciesReference: speciesReference,
            '_xmlns:render': 'http://projects.eml.org/bcb/sbml/render/level2',
            boundingBox: {
              position: {
                _x: 0,
                _y: 0
              },
              dimensions: {
                _width: 0,
                _height: 0
              }
            }
          });
        });
      });


      // Validate that empty elements are removed
      if (!SgSbmlUtils.arrayify(model.listOfParameters.parameter).length) {
        delete model.listOfParameters;
      }
      if (!SgSbmlUtils.arrayify(model.listOfCompartments.compartment).length) {
        delete model.listOfCompartments;
      }
      if (!SgSbmlUtils.arrayify(model.listOfReactions.reaction).length) {
        delete model.listOfReactions;
      }
      if (!SgSbmlUtils.arrayify(model.listOfSpecies.species).length) {
        delete model.listOfSpecies;
      }
      if (!SgSbmlUtils.arrayify(listOfReactionGlyphs.reactionGlyph).length) {
        delete layout.listOfReactionGlyphs;
      }
      if (!SgSbmlUtils.arrayify(listOfSpeciesGlyphs.speciesGlyph).length) {
        delete layout.listOfSpeciesGlyphs;
      }
      if (!SgSbmlUtils.arrayify(listOfTextGlyphs.textGlyph).length) {
        delete layout.listOfTextGlyphs;
      }

      return copiedSbml;
    };

    SgSbmlTranslator.prototype.getSbmlString = function() {

      // Reorder XML nodes to be valid SBML
      var doc = SgSbmlUtils.x2js.json2xml(this.getSbml());
      var model = angular.element(doc).find('model')[0];
      var children = [];
      while (model.firstChild) {
        children.push(model.removeChild(model.firstChild));
      }
      var order = [
        'annotation',
        'listOfFunctionDefinitions',
        'listOfCompartmentTypes',
        'listOfSpeciesTypes',
        'listOfCompartments',
        'listOfSpecies',
        'listOfParameters',
        'listOfInitialAssignments',
        'listOfRules',
        'listOfConstraints',
        'listOfReactions',
        'listOfEvents'
      ];
      _.each(order, function(tagname) {
        var ind = _.findIndex(children, function(child) {
          return tagname.toLowerCase().match(child.tagName.toLowerCase());
        });
        if (ind > -1) {
          model.appendChild(children[ind]);
        }
      });

      return new XMLSerializer().serializeToString(doc);
    };

    // Public API here
    return SgSbmlTranslator;
  });
