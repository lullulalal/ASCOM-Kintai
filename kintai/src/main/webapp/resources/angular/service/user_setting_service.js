'use strict';

app.factory('userSetService', ['comnService', function(comnService){
	
	function getUserAppSetting(){
		var setting = null;
		
		$.ajax({
			url:'getUserAppSetting', 
			type: 'post',             
			async: false,
			success: function(response) { 
				setting = response;
			}
		});
		return setting;
	}
	
	function setWorkLocationSelect(userAppSet){
		$('#0028').html( comnService.getText('0028'));
		$('#0029').html( comnService.getText('0029'));
		
		var select = userAppSet['workLocation'];
		$('#'+select).attr("selected",true);

    }
    
	function setWorkLanguageSelect(userAppSet){
		$('#JP').html( comnService.getText('0053'));
		$('#KR').html( comnService.getText('0032'));
		
		var select = userAppSet['language'];
		$('#'+select).attr("selected",true);
    }
    
	function updateUserAppSetting(userAppSet){
		/*var pwd1 = $("#pwd1").val();
		var pwd2 = $("#pwd2").val();
		
		if(pwd1 != pwd2){
			   var title = comnService.getText('0052');
			   var text = comnService.getText('0054');
			   var btnText = comnService.getText('0037');
			   
			   var modalObj =  {
			        'type' : 'fail',
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
			return;
		}
		*/
		userAppSet['workLocation'] = $("#location option:selected").val();
		userAppSet['language'] = $("#language option:selected").val();
		
		$.ajax({
			url:'updateUserAppSetting', 
			type: 'post', 
			data : {
				language : userAppSet['language'],
				workLocation : userAppSet['workLocation'],
				authority : userAppSet['authority']
			}, 
			success: function(response) { 
				
				
				   var title = comnService.getText('0007');
				   var text = comnService.getText('0050');
				   var btnText = comnService.getText('0037');
				   
				   var modalObj =  {
				        'type' : 'fail',
				        'title' : title,
				        'text' : text,
						'buttons' : [{
							'text': btnText,
							'val': 'ok',
							'eKey' : true,
							'addClass': 'btn-orange btn-square',
							'onClick': function() {
								location.reload(); 
								return true;
							}
						}]
				    } 
				    
					comnService.commonModal(modalObj);
				   
			}
		});
		
		
    }
    
	function updateUserPassword(){
		var pwd1 = $("#pwd1").val();
		var pwd2 = $("#pwd2").val();
		
		if(pwd1 != pwd2){
			   var title = comnService.getText('0052');
			   var text = comnService.getText('0054');
			   var btnText = comnService.getText('0037');
			   
			   var modalObj =  {
			        'type' : 'fail',
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
			return;
		}

		$.ajax({
			url:'updateUserPassword', 
			type: 'post', 
			data : {
				pwd : pwd1
			}, 
			success: function(response) { 
				   var title = comnService.getText('0052');
				   var text = comnService.getText('0057');
				   var btnText = comnService.getText('0037');
				   
				   var modalObj =  {
				        'type' : 'fail',
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
				   
					$("#pwd1").val('');
					$("#pwd2").val('');
			}
		});
		
		
    }
	
	
	 return {
		 getUserAppSetting : getUserAppSetting,
		 setWorkLocationSelect: setWorkLocationSelect,	
		 setWorkLanguageSelect: setWorkLanguageSelect, 
		 updateUserAppSetting : updateUserAppSetting,
		 updateUserPassword : updateUserPassword
	 }

}]);