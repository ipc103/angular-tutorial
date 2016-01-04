angular.module('flatironGrouper', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'The system is working';
  $scope.groups = [{name: 'Steelers', status: 'Playoff Team', rank: 6}, {name: 'Pirates', status: 'Playoff Team', rank: 4}, {name: 'Penguins', status: 'Not so Good', rank: 17}];
}]);
