'use strict';

app.factory('adminPersonYearService', ['comnService', '$compile' , '$rootScope',function(comnService, $compile, $rootScope){
	
	function getCurrentDate(handler){
		$.ajax({
			url : 'currentTime', 
			type: 'post', 
			success: function(response) { 
				handler(response);
			}
		});
	  }	
   
   function getWorkInfoByYear(year, email){
	   
		$.ajax({
			url : 'getWorkInfoByYear', 
			type: 'post', 
			data : {
				year : year, 
				email : email
			}, 
			success: function(response) { 
				//alert(JSON.stringify(response));
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
		    	 
		    	 $('#list').html('');
		
		    	 $('#list').html($compile(listHtml)($rootScope));

   		});
   	});
   }
   
   function getBtnList(list, timeStr, dayStr){
   	var btnHtml = '';
   	
	for (var i = 0; i < list.length; i++) {
		var id = 'month' + i;
		btnHtml += 
			'<button onclick="window.location.href = \'adminMonthDetail?'
			+ 'email=' + list[i]['email'] + '&'
			+ 'workDate=' + list[i]['workDate'] +'&'
 			+ 'lastname=' + list[i]['lastname'] +'&'
 			+ 'firstname=' + list[i]['firstname'] +'&'
 			+ 'nickName=' + list[i]['nickName'] +'&'
			+ 'prePage=' + 'adminYear'
			+ '\'"' 
			+ ' class="btn_' + list[i]['condi'] + '"' 
			+ 'email=' + list[i]['email'] + " " 
			+ 'workDate=' + list[i]['workDate'] + " "
			+ 'id=' + id + " ";
			 
		btnHtml +=
			'>' 
			+ list[i]['workDate'].substring(5, 7) 
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
		 getWorkInfoByYear : getWorkInfoByYear
	 }

}]);