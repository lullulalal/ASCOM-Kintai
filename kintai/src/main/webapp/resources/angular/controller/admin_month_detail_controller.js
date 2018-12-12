'use strict';

app.controller('adminMonthDetailCtrl', ['$scope',  'adminMonthDetailService','comnService',  function($scope, adminMonthDetailService, comnService) {
	var dayOfWeekCodes = ['', '0066', '0068', '0069', '0070', '0071', '0072', '0073' ];
	var dayOfWeekStrs = {'' : ''};
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			var workDate = $('#workDate').val();
			
			$('#month').val(workDate);
			
	    	var month = $('#month').val();
	    	var email = $('#email').val();
	    	
	    	for(var i = 1; i < dayOfWeekCodes.length; i++) {
	    		
		    	 comnService.getText2(dayOfWeekCodes[i], function(dayOfWeekStr, code){
		    		 dayOfWeekStrs[code] = dayOfWeekStr;
		    		 
		    		 if(Object.keys(dayOfWeekStrs).length == dayOfWeekCodes.length){
		    			 adminMonthDetailService.printWorkInfoMonthDetail( month, email, dayOfWeekCodes, dayOfWeekStrs, $scope);
		    		 }
		    	 });
	    	}
		});
    });
    
    $scope.changeWorkState = function() {
    	
    	var month = $('#month').val();
    	var email = $('#email').val();
    	
    	if( month == null || month == '') return;
    	
    	adminMonthDetailService.printWorkInfoMonthDetail( month, email, dayOfWeekCodes, dayOfWeekStrs, $scope);
    };
    
    $scope.peopleClick = function(id) {
    	comnService.MonthWorkInfo(id);
    };
}]);