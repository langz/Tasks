'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
