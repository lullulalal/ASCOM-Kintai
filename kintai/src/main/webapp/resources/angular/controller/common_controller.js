'use strict';

app.controller('comnCtrl', ['$scope', 'comnService', function($scope, comnService) {
			      
	$scope.getText = function(code) {

		if( $('#navbarResponsive').html() == '') {
			
			$('#navbarResponsive').html(comnService.getMenu());
		}
		
		var text = comnService.getText(code);
		var cls = '.' + code;
		$(cls).html(text);
		return comnService.getText(code);
	};
	
}]);