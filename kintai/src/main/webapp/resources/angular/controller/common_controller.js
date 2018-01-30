'use strict';

app.controller('comnCtrl', ['$scope', 'comnService', function($scope, comnService) {
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			comnService.getMenu();
		});
    });
	
	$scope.getText = function(code) {
		comnService.getText(code);
	};
	
}]);