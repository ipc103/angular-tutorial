angular.module('flatironGrouper', [])
.factory('groups', [function(){
  var o = {
    groups: [
      {name: "Pittsburgh Steelers", rank: 6},
      {name: "Pittsburgh Pirates", rank: 4},
      {name: "Pittsburgh Penguins", rank: 17, status: "Not Very Good"}
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
  }]);
