'use strict';

app.factory('userSetService', ['comnService',  function(comnService){
	
	function getUserAppSetting(rstHandle){
		
		$.ajax({
			url:'getUserAppSetting', 
			type: 'post',             

			success: function(response) { 
				rstHandle(response);
			}
		});

	}
	
	function setWorkLocationSelect(userAppSet){
		comnService.getText('0028');
		comnService.getText('0029');
		
		var select = userAppSet['workLocation'];
		$('#'+select).attr("selected",true);

    }
    
	function setWorkLanguageSelect(userAppSet){
		comnService.getText('0053');
		comnService.getText('0032');

		var select = userAppSet['language'];
		$('#'+select).attr("selected",true);
    }
    
	function updateUserAppSetting(userAppSet, opt){
		
		userAppSet[opt] = $('#' + opt + ' option:selected').val();
		
		var url;
		if(opt == 'language') 
			url = 'updateUserLanguage';
		else if (opt == 'workLocation') 
			url = 'updateUserWorkLocation';
		
		$.ajax({
			url : url, 
			type: 'post', 
			data : {
				language : userAppSet['language'],
				workLocation : userAppSet['workLocation'],
				authority : userAppSet['authority']
			}, 
			success: function(response) { 
				comnService.commonModal('0007', '0050', '0037');
				   
			}
		});
		
		
    }
    
	function updateUserPassword(){
		var pwd1 = $("#pwd1").val();
		var pwd2 = $("#pwd2").val();
		
		if( (pwd1 != pwd2) || (pwd1 == '') || (pwd2 == '')){
			comnService.commonModal('0052', '0054', '0037');
			return;
		}

		$.ajax({
			url:'updateUserPassword', 
			type: 'post', 
			data : {
				pwd : pwd1
			}, 
			success: function(response) {
				comnService.commonModal('0052', '0057', '0037');

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