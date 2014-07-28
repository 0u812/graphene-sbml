'use strict';

angular.module('sg.graphene.sbml')
  .controller('SbmlDataCtrl', function($scope, $http) {

    $scope.linkModifers = true;
    $scope.allowUnstick = false;
    $scope.showReactionNodes = false;
    $scope.max = {
      links: {
        in : 1,
        out: 1
      }
    };

    $scope.exports = {
      linkModifiers: $scope.linkModifiers,
      showReactionNodes: $scope.showReactionNodes,
      allowUnstick: $scope.allowUnstick,
      max: $scope.max
    };

    if ($scope.sbmlUrl) {
      $http.get($scope.sbmlUrl).success(function(data) {
        $scope.exports.sbml = data;
      });
    }

  });
