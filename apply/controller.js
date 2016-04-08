angular.module("mainModule",[])
	.controller("FirstController",["$scope",function(s){
		s.nombre ="mario";
		setTimeout(function(){
			 s.nombre = "otro nombre";
			 console.log(s.nombre);
			 s.$digest();

		},2000);
		document.querySelector("#boton1").addEventListener("click",function(){
			s.$apply(function(){
				s.nombre = "otro nombre click";
			});
		});
	}]);
