angular.module("mainModule",[])
	.controller("FirstController",["$scope","$http", function(s,h){
    s.posts = [];
		s.loading = true;
    h.get("http://jsonplaceholder.typicode.com/posts")
        .success(function(data){
          s.posts = data;
          console.log(data);
					s.loading = false;
        })
        .error(function(data){
					s.loading = false;
        })
	}]);
