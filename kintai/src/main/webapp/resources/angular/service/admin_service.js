'use strict';

app.factory('adminService', ['comnService', '$compile' , function(comnService, $compile){
	
    
    function getWorkInfoByDay(date, state, handler){
		$.ajax({
			url : 'getWorkInfoByDay', 
			type: 'post', 
			data : {
				date : date, 
				state : state
			}, 
			success: function(response) { 
				
				handler(response);
			}
		});
    }
    
    function getCurrentDate(handler){
		$.ajax({
			url : 'currentTime', 
			type: 'post', 
			success: function(response) { 
				handler(response);
			}
		});
    }
    

	 return {
		 getWorkInfoByDay : getWorkInfoByDay,
		 getCurrentDate : getCurrentDate
	 }

}]);