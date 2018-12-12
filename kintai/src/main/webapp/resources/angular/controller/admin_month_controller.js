'use strict';

app.controller('adminMonthCtrl', ['$scope', 'adminMonthService',  function($scope, adminMonthService) {

    angular.element(document).ready(function () {
		$(document).ready(function(){
			$("#workSelect option:first").remove();

			var workMonth = $('#workMonth').val();
			var condi = $('#condi').val();
			
			
			
			if(workMonth == ''|| condi == '') {
			
				adminMonthService.getCurrentDate(function(date){
					var month = date.substring(0, 7);
					$('#month').val(month);
						
					adminMonthService.printWorkInfoByMonth( month, '0062');
				});
			}
			
			else {
				$('#month').val(workMonth);
				$("#workSelect").val(condi).attr("selected", "selected");

				adminMonthService.printWorkInfoByMonth( workMonth, condi);
			}
			
		});
    });
    
    $scope.changeWorkState = function() {
    	
    	var state = $('#workSelect option:selected').val();
    	var month = $('#month').val();
    	
    	if( month == null || month == '') return;
    	
    	adminMonthService.printWorkInfoByMonth( month, state);
    };

}]);