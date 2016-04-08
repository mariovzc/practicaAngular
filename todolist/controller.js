angular.module("toDoList",["LocalStorageModule"])
	.controller("FirstController",["$scope","localStorageService", function(s,l){
		if (l.get("angular-todolist")) {
			s.todo = l.get("angular-todolist");
		} else{
			s.todo =[];
		}
		s.newActv = {};
		s.$watchCollection('todo', function(newValue,oldValue){
			l.set("angular-todolist",s.todo);
		});
		s.addActividad = function(){
			s.todo.push(s.newActv);
			s.newActv = {};
			
		};
		
	}]);