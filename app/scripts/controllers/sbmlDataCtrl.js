/* global Dropzone:false */
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

    $scope.selected = {};

    $scope.loadedFiles = [];
    $scope.dropzone = new Dropzone(document.body, {
      url: '/',
      autoProcessQueue: false,
      error: function(file, kresponseText, e) {
        console.log('Error! ', e);
      }
    });

    $scope.dropzone.on('addedfile', function(file) {
      var fr = new FileReader();
      fr.onload = function() {
        $scope.loadedFiles.push({
          name: file.name,
          contents: fr.result
        });
        $scope.dropzone._finished(file, 'Done!');
        $scope.$digest();
      };
      fr.readAsText(file);
    });

    $scope.exports = {
      linkModifiers: $scope.linkModifiers,
      showReactionNodes: $scope.showReactionNodes,
      allowUnstick: $scope.allowUnstick,
      max: $scope.max
    };

    if ($scope.sbmlUrl) {
      $http.get($scope.sbmlUrl).success(function(data) {
        $scope.loadedFiles.push({
          name: $scope.sbmlUrl,
          contents: data
        });
        $scope.selected.file = 0;
      });
    }
    $scope.$watch('selected.file', function(newVal) {
      if (!_.isUndefined(newVal)) {
        $scope.exports.sbml = $scope.loadedFiles[newVal].contents;
      }
    });
  });
