angular.module('swApp')
.controller('shipCtrl', function($scope, shipService){

$scope.getShip = function(){
  shipService.getShip().then(function(response){
    console.log(response);
    $scope.ships = response.data;
  })
}
$scope.getShip(); 

})
