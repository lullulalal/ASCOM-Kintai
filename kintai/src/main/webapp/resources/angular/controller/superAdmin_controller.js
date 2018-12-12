'use strict';

app.controller('superAdminCtrl', ['$scope', 'superAdminService', function($scope, superAdminService) {
	var superAdminSetting;
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			$scope.getSuperAdminSetting();
		
		});
    });
    
	$scope.getSuperAdminSetting = function() {
		superAdminService.getSuperAdminSetting(function(adminSet) {
			superAdminSetting = adminSet;
			
			$('#notice').html(superAdminSetting["notice"]);
			superAdminService.setTimepicker('minTimepicker', superAdminSetting["minTime"]);
			superAdminService.setTimepicker('maxTimepicker', superAdminSetting["maxTime"]);
			
		});
	};
	
	$scope.updateSuperAdminSetting = function() {
		superAdminService.changeTimeType( $('#minTimepicker').val(), function(newMinTime){
			superAdminSetting["minTime"] = newMinTime;
			superAdminService.changeTimeType( $('#maxTimepicker').val(), function(newMaxTime){
				 superAdminSetting["maxTime"] = newMaxTime;
				 
				 superAdminSetting["notice"] = $('#notice').val();
				 superAdminService.updateSuperAdminSetting(superAdminSetting);
			});
		});
	};

}]);