'use strict';

app.factory('superAdminService', ['comnService', function(comnService){
	
	function getSuperAdminSetting(){
		var setting = null;
		
		$.ajax({
			url:'getSuperAdminSetting', 
			type: 'post',             
			async: false,
			success: function(response) { 
				setting = response;
			}
		});
		return setting;
	}
	
	function updateSuperAdminSetting(setting){		
		$.ajax({
			url:'updateSuperAdminSetting', 
			data: setting, 
			type: 'post',             
			success: function(response) { 
			   var title = comnService.getText('0007');
			   var text = comnService.getText('0050');
			   var btnText = comnService.getText('0037');
			   
			   var modalObj =  {
			        'type' : 'success',
			        'title' : title,
			        'text' : text,
					'buttons' : [{
						'text': btnText,
						'val': 'ok',
						'eKey' : true,
						'addClass': 'btn-orange btn-square',
						'onClick': function() {
							return true;
						}
					}]
			    } 
			    
				comnService.commonModal(modalObj);
			}
		});
	}
	
	 return {
		 getSuperAdminSetting : getSuperAdminSetting,
		 updateSuperAdminSetting : updateSuperAdminSetting
	 }

}]);