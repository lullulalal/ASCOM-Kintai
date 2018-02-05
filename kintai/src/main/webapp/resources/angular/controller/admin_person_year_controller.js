'use strict';

app.controller('adminPersonYearCtrl', ['$scope', '$compile' ,  'adminPersonYearService','comnService',  function($scope, $compile, adminPersonYearService, comnService) {

	var startYear = 2018;
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			adminPersonYearService.getCurrentDate(function(date){
				$("#year option:first").remove();
				
				var recentYear = date.substring(0, 4) * 1;
				
				for(var i = startYear; i <= (recentYear); i++){
					var opt = "<option id='" + i + "' value='"+ i + "'>" + i + "</option>";
					$("#year").prepend(opt);
				}
	
				$("#" + $("#tYear").val() ).attr("selected", "selected");
				
				adminPersonYearService.getWorkInfoByYear($("#tYear").val(), $("#email").val());
				
				$( "#year" ).change(function() {
					adminPersonYearService.getWorkInfoByYear($("#year").val(), $("#email").val());
				});
			});
		});
    });
    
}]);