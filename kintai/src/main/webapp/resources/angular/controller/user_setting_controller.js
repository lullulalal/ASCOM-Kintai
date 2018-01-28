'use strict';

app.controller('userSetCtrl', ['$scope', 'userSetService', function($scope, userSetService) {

	var userAppSet;
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			userSetService.getUserAppSetting(function(setting){
				userAppSet= setting;
				
				userSetService.setWorkLocationSelect(userAppSet);
				userSetService.setWorkLanguageSelect(userAppSet);
			});
			

		});
    });

	$scope.updateUserAppSetting = function(opt) {
		userSetService.updateUserAppSetting(userAppSet, opt);
	};
    
	$scope.updateUserPassword = function() {
		userSetService.updateUserPassword();
	};	
}]);