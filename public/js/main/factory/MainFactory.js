app.factory('mainFactory', MainFactory);

function MainFactory($http, $q){
	return {
		'json' : json,
	    'sum' : sum,
	    'flog' : flog
	}
	
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
	
	function flog(bool){
		return bool=!bool;
	}
}