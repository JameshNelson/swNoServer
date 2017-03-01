angular.module('swApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){


$urlRouterProvider.otherwise('',"/");

  $stateProvider
  .state('home',{
    controller: 'homeCtrl',
    url:"/",
    templateUrl: "./views/home.html"
  })
  .state('characters',{
    controller: 'mainCtrl',
    url:"/characters",
    templateUrl:"./views/characters.html"
  })
  .state('ships', {
    controller: 'shipCtrl',
    url:'/ships',
    templateUrl:"./views/ships.html"
  })
})
