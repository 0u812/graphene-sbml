'use strict';

/**
 * @ngdoc service
 * @name sg.graphene.sbml.sgNodeReaction
 * @description
 * # sgNodeReaction
 * Service in the sg.graphene.sbml.
 */
angular.module('sg.graphene.sbml')
  .factory('SgSbmlLink', function (SgLink, sgGeo) {

    var SgSbmlLink = function(){
      SgLink.apply(this, arguments);
    };
    SgSbmlLink.prototype = new SgLink();

    SgSbmlLink.prototype.update = function() {
      var reactionPosition = this.getReactionPosition();
      var reactionNode = this.reaction;
      reactionNode.x = reactionPosition.x;
      reactionNode.y = reactionPosition.y;

      var sourceSpacer, targetSpacer;
      if (_.isEqual(this.source.width, 0)) {
        sourceSpacer = 0;
      } else {
        sourceSpacer = 8;
      }
      if (_.isEqual(this.target.width, 0)) {
        targetSpacer = 0;
      } else {
        targetSpacer = 15;
      }
      var targetToSource = sgGeo.getLineIntersectionWithRectangle({
        x1: this.target.x,
        y1: this.target.y,
        x2: this.source.x,
        y2: this.source.y
      }, {
        x1: this.source.x - (this.source.width / 2 + sourceSpacer),
        y1: this.source.y - (this.source.height / 2 + sourceSpacer),
        x2: this.source.x + (this.source.width / 2 + sourceSpacer),
        y2: this.source.y + (this.source.height / 2 + sourceSpacer)
      });
      var sourceToTarget = sgGeo.getLineIntersectionWithRectangle({
        x1: this.source.x,
        y1: this.source.y,
        x2: this.target.x,
        y2: this.target.y
      }, {
        x1: this.target.x - (this.target.width / 2 + targetSpacer),
        y1: this.target.y - (this.target.height / 2 + targetSpacer),
        x2: this.target.x + (this.target.width / 2 + targetSpacer),
        y2: this.target.y + (this.target.height / 2 + targetSpacer)
      });

      if (_.contains(this.classes, 'modifier')) {
        var newPoint = sgGeo.extendPoint(targetToSource, sourceToTarget, -15);
        this.x1 = targetToSource.x;
        this.y1 = targetToSource.y;
        this.x2 = newPoint.x;
        this.y2 = newPoint.y;
        this.cp1 = sgGeo.extendPoint(sourceToTarget, targetToSource, -20);
        this.cp2 = sgGeo.extendPoint(targetToSource, sourceToTarget, -20);
      } else {
        this.x1 = targetToSource.x;
        this.y1 = targetToSource.y;
        this.x2 = sourceToTarget.x;
        this.y2 = sourceToTarget.y;
        this.cp1 = sgGeo.extendPoint(sourceToTarget, targetToSource, -20);
        this.cp2 = sgGeo.extendPoint(targetToSource, sourceToTarget, -20);
      }
    };


    SgSbmlLink.prototype.getReactionPosition = function() {
      var reaction = this.reaction;
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


    return SgSbmlLink;

  });
