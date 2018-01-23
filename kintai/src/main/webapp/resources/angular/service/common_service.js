'use strict';

app.factory('comnService',  function(){
	
	function getText(code){
		var text = null;
		
		$.ajax({
			url:'getText',
			data: {'code' : code},   
			type: 'post',             
			async: false,
			success: function(response) { 
				text = response[code];
			}
		});
		
		return text;
	}
	
	 return {
		 getText
	 }

});