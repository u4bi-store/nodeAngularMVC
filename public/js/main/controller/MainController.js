app.controller('main', mainController);

function mainController($scope, $http, mainFactory, mainService){
	
	init();
	
	function init(){
		$scope.f_click = f_click;
		$scope.s_click = s_click;
		
		$scope.f_sum = f_sum;
		$scope.s_sum = s_sum;
		$scope.flog = mainFactory.flog(true);
		
	}
	
	function f_click(){
		var q = mainFactory.json('/json/test.json');
		q.then(function(data){
			$scope.fmodel = data;
		});
	}
	
	function s_click(){
		var q = mainFactory.json('/json/test.json');
		q.then(function(data){
			$scope.smodel = data;
		});
	}
	
	function f_sum(num1, num2){
		return mainFactory.sum(num1,num2);
	}
	
	function s_sum(num1, num2){
		return mainService.sum(num1,num2);
	}
}