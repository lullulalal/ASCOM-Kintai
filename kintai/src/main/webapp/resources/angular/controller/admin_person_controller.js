'use strict';

app.controller('adminPersonCtrl', ['$scope',  'adminPersonService','comnService',  function($scope, adminPersonService, comnService) {

	
    angular.element(document).ready(function () {
		$(document).ready(function(){
			adminPersonService.getEmployees(function(){
				adminPersonService.searchPeople( $('#search').val());
			});
		});
    });
    
    $scope.changeInputTag = function() {
    	adminPersonService.searchPeople( $('#search').val());
    };

}]);