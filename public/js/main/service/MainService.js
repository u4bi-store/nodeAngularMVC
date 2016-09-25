app.service('mainService', MainService);

function MainService($http, $q){
	
	this.json = json;
	this.sum = sum;
	
	function json(path){
		var q =$q.defer();
		$http.get(path).success(function(data){
			q.resolve(data);
		}).error(function(err){
			q.reject(err);
		});
		return q.promise;
	}
	
	function sum(num1, num2){
		return num1+num2;
	}
	
}