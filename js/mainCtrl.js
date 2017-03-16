angular.module('swApp')
.controller('mainCtrl', function($scope, swService){
    $scope.test= 'this is a test'

    $scope.getCharacter = function(){
      swService.getCharacter().then(function(response){
        console.log(response);
        $scope.characters = response.data;
        swService.planet = response.data.homeworld;
        return response.data;

      })
    }

    //  $scope.getPlanet = function(){
    //     swService.getPlanet().then(function(response){
    //      console.log(response);
    //       $scope.planet = response.data;
    //     })
    //   }

      $scope.getCharacter();
      // $scope.getPlanet();

})
