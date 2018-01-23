'use strict';

app.controller('comnCtrl', ['$scope', 'comnService', function($scope, comnService) {
			      
	$scope.getText = function(code) {
		return comnService.getText(code);
	};
	
}]);