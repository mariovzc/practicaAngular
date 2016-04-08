angular.module("MyFirstApp",[])
	.controller("FirstController",["$scope",function(s){
		s.nuevoComentario = {};
		s.comentarios =[
			{
				comentario : "tutorial",
				username : "uno"
			},
			{
				comentario : "tutorial",
				username : "dos"
			}
		];
		s.agregarComentario = function(){
			s.comentarios.push(s.nuevoComentario);
			s.nuevoComentario = {};			
		};
	}]);