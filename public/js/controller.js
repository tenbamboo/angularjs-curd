angular.module('curd.controllers', [])
.controller('HomeController', function($scope, $timeout,UserService) {
	$scope.users=UserService.restore();
	$scope.remove=function(user){
		UserService.remove(user);
	}
	$scope.search='';
})
.controller('EditController', function ($scope,$location,$routeParams,UserService,LocationService) {
	if($routeParams.flag=="update"||$routeParams.flag=="view"){
		$scope.user=UserService.getById($routeParams.userId);
	}else{
		$scope.user={};
	}
	
	$scope.loVal=LocationService.getAll();

	angular.forEach($scope.user.hobby, function(n,i){
				if(n.name=="game"){
					$scope.hobby1=true;
				}else if(n.name=="football"){
					$scope.hobby2=true;
				}else if(n.name=="travel"){
					$scope.hobby3=true;
				}else if(n.name=="muzzy"){
					$scope.hobby4=true;
				}
			})
	$scope.submit=function(){
		var hobbys=new Array();
			var n=new Object();
			if( $scope.hobby1==true ){
				 n=new Object();
				n.name="game";
				hobbys.push(n);
			}
			if( $scope.hobby2==true ){
				 n=new Object();
				n.name="football";
				hobbys.push(n);
			}
			if( $scope.hobby3==true ){
				 n=new Object();
				n.name="travel";
				hobbys.push(n);
			}
			if( $scope.hobby4==true ){
				 n=new Object();
				n.name="muzzy";
				hobbys.push(n);
			} 
			console.log(hobbys);
			$scope.user.hobby=hobbys;
		if($routeParams.flag=="update"){
			UserService.update($scope.user);
		}else if($routeParams.flag=="save"){
			UserService.save($scope.user);
		}
		$location.path("#/");

	}
	$scope.back=function(){
		$location.path("#/");
	}
	if($routeParams.flag=="update"||$routeParams.flag=="save"){
		$scope.myDisabled=false;
	}else{
		$scope.myDisabled=true;
	}
	
})
