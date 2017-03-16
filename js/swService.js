angular.module("swApp")
.service('swService', function($http){


  this.getCharacter = function(){
    return $http({
      method: "GET",
      url: "http://swapi.co/api/people/1"
    })
  }
  // this.planet
  // var homeworld = this.planet;
  //  this.getPlanet = function(homeworld){
  //    return $http({
  //     method: "GET",
  //      url:homeworld
  //    })
  //  }
 })
