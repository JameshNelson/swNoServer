angular.module("swApp")
.service('shipService', function($http){

this.getShip = function(){
  return $http({
    method: "GET",
    url: "http://swapi.co/api/starships/9/"
  })
}

})
