'use strict';

app.controller('userSetCtrl', ['$scope', 'userSetService', function($scope, userSetService) {

	var userAppSet;
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			userAppSet = userSetService.getUserAppSetting();
			userSetService.setWorkLocationSelect(userAppSet);
			userSetService.setWorkLanguageSelect(userAppSet);
		});
    });

	$scope.updateUserAppSetting = function() {
		userSetService.updateUserAppSetting(userAppSet);
	};
    
	$scope.updateUserPassword = function() {
		userSetService.updateUserPassword();
	};	
}]);