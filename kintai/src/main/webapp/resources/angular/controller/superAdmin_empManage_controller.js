'use strict';

app.controller('superAdminEmpMngCtrl', ['$scope',  'superAdminEmpMngService','comnService',  function($scope, superAdminEmpMngService, comnService) {

	
    angular.element(document).ready(function () {
    	
    	superAdminEmpMngService.initScope($scope);
    	
		$(document).ready(function(){
			superAdminEmpMngService.getEmployees(function(){
				superAdminEmpMngService.searchPeople( $('#search').val());
			});
		});
    });
    
    $scope.changeInputTag = function() {
    	superAdminEmpMngService.searchPeople( $('#search').val());
    };		
    
    $scope.deleteEmployee = function() {
    	alert("delete");
    };		
    
			
    $scope.showEmpInfoDlg = function(email, nickName, firstName, lastName, department, phone) {
    	
    	if(email != undefined && email != null && email != ''){
			$.ajax({
				url:'getAuthByEmail', 
				type: 'post', 
    			data : {
    				email : email
    			}, 
				success: function(response) { 
					superAdminEmpMngService.showEmpInfoDlg(email, nickName, firstName, lastName, department, phone, response['auth']);
				}
			});
    	}
    	else
    		superAdminEmpMngService.showEmpInfoDlg("", "", "", "", "", "", "");
    };

}]);