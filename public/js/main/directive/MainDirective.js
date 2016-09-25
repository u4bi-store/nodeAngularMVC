app.directive('divisionTitle',divisionTitle);
app.directive('content',content);
app.directive('layout',layout);

function divisionTitle(){
	return {
		restrict: 'E',
		link:link,
		template : '<h1>{{title}}</h1>'
	}
	function link(scope, element, attrs){
		scope.title = attrs.name;
	}
}

function content(){
	return {
		restrict: 'E',
		link:link,
		template :
		'<input type="button" value="fatcory click" ng-click="f_click()"><br>'+
		'<input type="button" value="service click" ng-click="s_click()"><br><br>'+
		'factory name : {{fmodel.name}}<br>'+
		'service name : {{smodel.name}}<br><br>'+
		'factory sum : {{f_sum(23,23)}}<br>'+
		'service sum : {{s_sum(23,22)}}<br><br>'+
		'flog : {{flog}}<br><br>'
	}
	function link(scope, element, attrs){
		scope.temp = attrs.name;
	}
}

function layout(){
	return{
		templateUrl: function(element, attrs) {
			return 'views/main/'+attrs.type+'.html';
		}
	}
}