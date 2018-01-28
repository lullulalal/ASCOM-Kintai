'use strict';

app.factory('superAdminService', ['comnService', function(comnService){
	
	function getSuperAdminSetting(handle){
		
		$.ajax({
			url:'getSuperAdminSetting', 
			type: 'post',             
			//async: false,
			success: function(response) { 
				handle(response);
			}
		});

	}
	
	function updateSuperAdminSetting(setting){		
		$.ajax({
			url:'updateSuperAdminSetting', 
			data: setting, 
			type: 'post',             
			success: function(response) { 
			   comnService.commonModal('0007', '0050', '0037');
			}
		});
	}
	
	function changeTimeType(timeStr, rstHandle){
		var hourStr = '';
		var minuteStr = '';
		
		comnService.getText2('0048', function(text){
			hourStr = text;
			comnService.getText2('0049', function(text){
				minuteStr = text;
				var newTimeStr = timeStr.replace(hourStr, ":");
				rstHandle(newTimeStr.replace(minuteStr, ""));
			});
		});
	}
	
	function setTimepicker(eid, dfrtTime){
		var hourStr = '';
		var minuteStr = '';
		comnService.getText2('0048', function(text){
			hourStr = text;
			comnService.getText2('0049', function(text){
				minuteStr = text;
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
			});
		});
		

	}
	
	 return {
		 getSuperAdminSetting : getSuperAdminSetting,
		 updateSuperAdminSetting : updateSuperAdminSetting,
		 changeTimeType : changeTimeType,
		 setTimepicker : setTimepicker
	 }

}]);