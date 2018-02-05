'use strict';

app.factory('adminMonthDetailService', ['comnService', '$compile' ,  function(comnService, $compile){
	
/*    function getCurrentDate(handler){
		$.ajax({
			url : 'currentTime', 
			type: 'post', 
			success: function(response) { 
				handler(response);
			}
		});
    }
    */
	var rScope = null;
	
    function printWorkInfoMonthDetail(month, email, dayOfWeekCodes, dayOfWeekStrs, scope){
    		
		$.ajax({
			url : 'getWorkInfoByMonthDetail', 
			type: 'post', 
			data : {
				month : month, 
				email : email
			}, 
			success: function(response) { 
				rScope = scope;
				printHtml(response, dayOfWeekCodes, dayOfWeekStrs);
			}
		});
			
    }
    
    
    function printHtml(jsn, dayOfWeekCodes, dayOfWeekStrs){
    	var listHtml = '';
    	comnService.getText2('0048', function(text) {
    		var timeStr = text;

		    listHtml += getBtnList(jsn, timeStr, dayOfWeekCodes, dayOfWeekStrs);
		    	 
		    $('#people-list').html('');
		
		    $('#people-list').html($compile(listHtml)(rScope));

    	});
    }
    
    function getBtnList(list, timeStr, dayOfWeekCodes, dayOfWeekStrs){
    	var btnHtml = '';
    	
	   	for (var i = 0; i < list.length; i++) {
	   		 var id = 'day' + (i + 1);
	   		 var stateStr = list[i]['condi'];
	   		 if (list[i]['workState'] == '0012') stateStr='yasumi';
	   		 
			 btnHtml += 
			    		 '<button' 
				 		+ ' class="btn_' + stateStr + '"' 
			    		+ 'email=' + list[i]['email'] + " " 
			    		+ 'workDate=' + list[i]['workDate'] + " "
			    		+ 'startTime=' + list[i]['startTime'] + " "
			    		+ 'endTime=' + list[i]['endTime'] + " "
			    		+ 'restTime=' + list[i]['restTime'] + " "
			    		+ 'workTime=' + list[i]['workTime'] + " "
			    		+ 'workState=' + list[i]['workState'] + " "
						+ 'firstname=' + list[i]['firstname'] + " "
						+ 'lastname=' + list[i]['lastname'] + " "
			 			+ 'id=' + id + " ";
			 if(stateStr != 'yasumi'){
				 btnHtml += 'ng-click="peopleClick(' + "'" + id + "'" + ')"'  + " ";
			 }
			 btnHtml +=
			    		 '>' 
			    		+ list[i]['workDate'].substring(8, 10)
			    		+ '('
			    		+ dayOfWeekStrs[dayOfWeekCodes[list[i]['dayOfWeek']]]
			 			+ ')<br><font size="2">';
			 if(stateStr != 'yasumi') {
				 btnHtml += list[i]['startTime'].substring(0, 5)
			 			+ ' - '
			 			+ list[i]['endTime'].substring(0, 5);
			 }
			 else
				 btnHtml += ' - ';
/*			 			+ '<br>'
			 			+ Math.round(list[i]['workTime']*1 / 3600 )
			 			+ timeStr*/
			 btnHtml += '</font></button>';
		}
	   	 return btnHtml;
    }

	 return {
		 printWorkInfoMonthDetail :printWorkInfoMonthDetail
	 }

}]);