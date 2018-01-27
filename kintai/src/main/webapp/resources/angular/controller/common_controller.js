'use strict';

app.controller('comnCtrl', ['$scope', 'comnService', function($scope, comnService) {
			      
	$scope.getText = function(code) {
		
		var text = comnService.getText(code);
		var id = '.' + code;
		$(id).html(text);
		return comnService.getText(code);
	};
	
	
}]);