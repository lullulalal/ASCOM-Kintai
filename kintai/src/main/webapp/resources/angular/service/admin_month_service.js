'use strict';

app.factory('adminMonthService', ['comnService', '$compile' , '$rootScope',function(comnService, $compile, $rootScope){
	
    function getCurrentDate(handler){
		$.ajax({
			url : 'currentTime', 
			type: 'post', 
			success: function(response) { 
				handler(response);
			}
		});
    }
    
    function printWorkInfoByMonth(month, state){
    	
		$.ajax({
			url : 'getWorkInfoByMonth', 
			type: 'post', 
			data : {
				month : month, 
				state : state
			}, 
			success: function(response) { 
				printHtml(response);
			}
		});
    }
    
    function printHtml(jsn){
    	var listHtml = '';
    	comnService.getText2('0048', function(text) {
    		var timeStr = text;
    		comnService.getText2('0066', function(text) {
    			var dayStr = text;
				
		        listHtml += getBtnList(jsn, timeStr, dayStr);
		    	 
		    	 $('#people-list').html('');
		
		    	 $('#people-list').html($compile(listHtml)($rootScope));
    		});
    	});
    }
    
    function getBtnList(list, timeStr, dayStr){
    	var btnHtml = '';
    	var state = $('#workSelect option:selected').val();
    	var stateStr = '';
    	if(state == '0062')
    		stateStr = 'bad';
    	else if(state == '0063')
    		stateStr = 'warn';
    	else if(state == '0064')
    		stateStr = 'good';
    	
	   	for (var i = 0; i < list.length; i++) {
	   		 var id = 'people' + i;
			 btnHtml += 
			    		 '<button onclick="window.location.href = \'adminMonthDetail?'
				 		+ 'email=' + list[i]['email'] + '&'
			 			+ 'workDate=' + list[i]['workDate'] +'&'
			 			+ 'firstname=' + list[i]['firstname'] +'&'
			 			+ 'lastname=' + list[i]['lastname'] +'&'
			 			+ 'condi=' + state +'&'
			 			+ 'nickName=' + list[i]['nickName'] +'&'
			 			+ 'prePage=' + 'adminMonth'
			 			+ '\'"' 
				 		+ ' class="btn_' + stateStr + '"' 
			    		+ 'email=' + list[i]['email'] + " " 
			    		+ 'workDate=' + list[i]['workDate'] + " "
			    		+ 'workTime=' + list[i]['workTime'] + " "
						+ 'firstname=' + list[i]['firstname'] + " "
						+ 'lastname=' + list[i]['lastname'] + " "
			 			+ 'id=' + id + " ";
			 
			 btnHtml +=
			    		 '>' 
			    		+ list[i]['nickName'] 
			 			+ '<br><font size="2">'
			 			+ Math.round(list[i]['workTime']*1 / 3600 )
			 			+ timeStr + ' / '
			 			+ list[i]['count']
	 					+ dayStr
			    		+ '</font></button>';
		}
	   	 return btnHtml;
    }

	 return {
		 getCurrentDate : getCurrentDate,
		 printWorkInfoByMonth : printWorkInfoByMonth
	 }

}]);