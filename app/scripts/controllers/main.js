'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
