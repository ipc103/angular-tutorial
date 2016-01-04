angular.module('flatironGrouper', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home',{
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

    $stateProvider.state('groups', {
      url: '/groups/{id}',
      templateUrl: '/groups.html',
      controller: 'GroupsCtrl'
    });

    $urlRouterProvider.otherwise('home');
  }])
.factory('groups', [function(){
  var o = {
    groups: [
      {name: "Pittsburgh Steelers",
      rank: 6,
      players: [
        {name: "Antonio Brown"}
      ]},
      {name: "Pittsburgh Pirates", rank: 4,
      students: [
        {name: "Andrew McCutchen"}
      ]},
      {name: "Pittsburgh Penguins", rank: 17, status: "Not Very Good",
      players: [
        {name: "Sidney Crosby"}
      ]}
    ]
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'groups',
function($scope, groups){
    $scope.groups = groups.groups
    $scope.addGroup = function(){
      if ($scope.name == ''){
        return;
      }
      $scope.groups.push({name: $scope.name, rank: parseInt($scope.rank), status: $scope.status})
      $scope.name = '';
      $scope.rank = '';
      $scope.status = '';
    };
    $scope.incrementRank = function(group){
      group.rank -= 1;
    };

    $scope.decrementRank = function(group){
      group.rank += 1;
    };
  }])
  .controller('GroupsCtrl', [
    '$scope',
    '$stateParams',
    'groups',
    function($scope, $stateParams, groups){
      $scope.group = groups.groups[$stateParams.id];
      $scope.addStudent = function(){
        $scope.group.students.push({name: $scope.name});
        $scope.name = '';
      };
    }]);
