angular.module("swApp")
.service('swService', function($http){

  this.getCharacter = function(){
    return $http({
      method: "GET",
      url: "http://swapi.co/api/people/1"
    })
  }
})
