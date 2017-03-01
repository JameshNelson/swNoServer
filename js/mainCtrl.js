angular.module('swApp')
.controller('mainCtrl', function($scope, swService){
    $scope.test= 'this is a test'

    $scope.getCharacter = function(){
      swService.getCharacter().then(function(response){
        console.log(response)
        $scope.characters = response.data
      })
    }
    $scope.getCharacter();
})
