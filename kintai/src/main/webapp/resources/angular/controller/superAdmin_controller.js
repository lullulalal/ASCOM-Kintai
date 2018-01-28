'use strict';

app.controller('superAdminCtrl', ['$scope', 'superAdminService', function($scope, superAdminService) {
	var superAdminSetting;
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			superAdminSetting = $scope.getSuperAdminSetting();
			
			setTimepicker('minTimepicker', superAdminSetting["minTime"]);
			setTimepicker('maxTimepicker', superAdminSetting["maxTime"]);
		});
    });
    
	$scope.getSuperAdminSetting = function() {
		return superAdminService.getSuperAdminSetting();
	};
	
	$scope.updateSuperAdminSetting = function() {
		superAdminSetting["minTime"] = changeTimeType( $('#minTimepicker').val() );
		superAdminSetting["maxTime"] = changeTimeType( $('#maxTimepicker').val() );

		superAdminService.updateSuperAdminSetting(superAdminSetting);
	};
	
	function changeTimeType(timeStr){
		var hourStr = $('#hourStr').val();
		var minuteStr = $('#minuteStr').val();
		
		var newTimeStr = timeStr.replace(hourStr, ":");
		return newTimeStr.replace(minuteStr, "");
	}
	
	function setTimepicker(eid, dfrtTime){
		var hourStr = $('#hourStr').val();
		var minuteStr = $('#minuteStr').val();
		
		$('#' + eid).timepicker({
		    timeFormat: 'h' + hourStr + 'mm' + minuteStr,
		    interval: 15,
		    minTime: '6',
		    maxTime: '12:45pm',
		    defaultTime: dfrtTime,
		    startTime: '6:00',
		    dynamic: false,
		    dropdown: true,
		    scrollbar: true
		});
	}
}]);