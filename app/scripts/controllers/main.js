'use strict';

/**
* @ngdoc function
* @name tasksApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the tasksApp
*/
angular.module('tasksApp')
.controller('MainCtrl', [ '$scope', '$firebase', function ($scope, $firebase) {

  var tasksRef = new Firebase('https://tasks-anders.firebaseio.com/tasks');

  $scope.tasks = $firebase(tasksRef);

  $scope.newTask = {name: '', information: '', hours: '', created: '', done: false, notified: 'No'};

  $scope.saveTask = function(){
    $scope.newTask.created = new Date();
    $scope.tasks.$add($scope.newTask);
    $scope.newTask = {name: '', information: '', hours: '', created: '', done: false, notified: 'No'};

  };

  $scope.sendNotification = function(task){
    var notificationRef = new Firebase('https://tasks-anders.firebaseio.com/textMessages');
    var textMessages = $firebase(notificationRef);
    var date = new Date(task.created);
    var dateString = date.toString();
    var messageText = 'Task ' + task.name + ', ' + task.information + '. Created at ' + dateString  + ' and is estimated to take ' + task.hours + ' hours';
    textMessages.$add({phoneNumber: 4793086048, message: messageText});

task.notified ='Yes';
$scope.tasks.$save(task.$id);
  };

}]);
