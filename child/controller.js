angular.module("mainModule",[])
  .run(function($rootScope){
    $rootScope.nombre = "soy un nombre de prueba";
  })
	.controller("FirstController",["$scope",function(s){
    s.nombre ="hola";
	}]);
