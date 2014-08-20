/*jshint latedef:false*/
'use strict';

/**
 * @ngdoc service
 * @name grapheneSbmlApp.sgSbmlUtils
 * @description
 * # sgSbmlUtils
 * Factory in the grapheneSbmlApp.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlUtils', function() {
    // Service logic
    // ...

    var api = {
      arrayify: arrayify,
      colorConvert: colorConvert,
      ensureExists: ensureExists,
      setPositionFromAttributes: setPositionFromAttributes,
      setDimensionsFromAttributes: setDimensionsFromAttributes,
      x2js: new X2JS()
    };

    function arrayify(s) {
      if (typeof s === 'object') {
        if (!_.isUndefined(s.length)) {
          // already an array-like object
          return s;
        } else {
          return [s];
        }
      } else if (typeof s === 'string') {
        return s.split();
      }
    }

    function colorConvert(s) {
      // Just does basic checking to convert 8 digit hex string to 6
      if (_.isString(s) && _.isEqual(s.length, 8)) {
        return '#' + s.substr(0, 6);
      } else {
        return s;
      }
    }

    function ensureExists(obj, propertyArray) {
      _.each(propertyArray, function(prop) {
        if (!obj[prop]) {
          obj[prop] = {};
        }
        obj = obj[prop];
      });
      return obj;
    }

    function setPositionFromAttributes(node, obj) {
      node.x = parseInt(obj._x, 10);
      node.y = parseInt(obj._y, 10);
    }

    function setDimensionsFromAttributes(node, obj) {
      node.width = parseInt(obj._width, 10);
      node.height = parseInt(obj._height, 10);
    }

    // Public API here
    return api;
  });
