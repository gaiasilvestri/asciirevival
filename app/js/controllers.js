'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
    $scope.titlebox1 = 'HTML';
    $scope.titlebox2 = 'CSS';
    $scope.titlebox3 = 'JavaScript';
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
  	$scope.greeting = 'Welcome to the gallery!';
  	$scope.gallerysubtitle = 'Click on a creation to see the code in action.';
  }]);