'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlTemplate
 * @description
 * # sgSbmlTemplate
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlTemplate', function () {
    // Service logic
    // ...

    var template = {
      sbml: {
        _level: 2,
        _version: 1,
        _xmlns: 'http://www.sbml.org/sbml/level2',
        '_xmlns:jd2': 'http://www.sys-bio.org/sbml/jd2',
        model: {
          _id: 'untitled',
          _name: 'untitled',
          annotation: {},
          listOfCompartments: {
            compartment: [{
              _id: 'compartment',
              _size: 1
            }]
          },
          listOfParameters: {
            parameter: []
          },
          listOfReactions: {
            reaction: []
          },
          listOfSpecies: {
            species: []
          }
        }
      }
    };

    // Public API here
    return {
      newTemplate: function() {
        return angular.copy(template);
      }
    };
  });
