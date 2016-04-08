angular.module("MyFirstApp",[])
	.controller("FirstController",["$scope","$http", function(s,h){
		s.fruits = [];
		s.newFruit = {};
		h.get("http://apiror.herokuapp.com/products.json")
			.success(function(data){
				console.log(data);
				s.fruits = data;
			})
			.error(function(error){

			})
		s.addFruit = function(){
			h.post("http://apiror.herokuapp.com/products.json",{
				nombre: s.newFruit.nombre,
				precio: s.newFruit.precio
			})
			.success(function(data){
				s.fruits.push(s.newFruit);
				s.newFruit = {};
			})
			.error(function(error){
				console.log(error);
			})
		}
	}]);