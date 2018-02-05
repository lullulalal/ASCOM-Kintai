'use strict';

app.factory('adminPersonService', ['comnService', '$compile' , '$rootScope',function(comnService, $compile, $rootScope){
	
   var peopleListJsn ;
	
   function getCurrentDate(handler){
		$.ajax({
			url : 'currentTime', 
			type: 'post', 
			success: function(response) { 
				handler(response);
			}
		});
   }
   
   function getEmployees(handle){
	   
		$.ajax({
			url : 'getEmployees', 
			type: 'post', 
			success: function(response) { 
				peopleListJsn = response;
				handle();
			}
		});
    }
   
   function searchPeople(keyword){
	   var searchList = [];
	   
	   if(keyword == '') searchList=peopleListJsn;
	   else {
			for (var i = 0; i < peopleListJsn.length; i++) {
				var ken = '';
				ken += ''
						+ peopleListJsn[i]['email'] + ' '
						+ peopleListJsn[i]['nickName'] + ' '
						+ peopleListJsn[i]['firstName'] + ' '
						+ peopleListJsn[i]['lastName'] + ' '
						+ peopleListJsn[i]['firstName']  +' ';
	
				if( ken.toLowerCase().indexOf(keyword.toLowerCase()) != -1 )
					searchList.push(peopleListJsn[i])

			}
	   }
	   
	   printPeople(searchList);
   }
    
    function printPeople(jsn){
		getCurrentDate(function(date){
			var year = date.substring(0, 4);
	    	var listHtml = '';
	        listHtml += getBtnList(jsn, year);
	   	 
		   	 $('#people-list').html('');
		
		   	 $('#people-list').html($compile(listHtml)($rootScope));
		});
		

    }
    

    function getBtnList(list, year){
    	var btnHtml = '';
		
	   	for (var i = 0; i < list.length; i++) {
	   		 var id = 'people' + i;
	   		 
			 btnHtml += 
			    		 '<button onclick="window.location.href = \'adminPersonYear?'
				 		+ 'email=' + list[i]['email'] + '&'
			 			+ 'year=' + year +'&'
			 			+ 'firstname=' + list[i]['firstname'] +'&'
			 			+ 'lastname=' + list[i]['lastname'] +'&'
			 			+ 'nickName=' + list[i]['nickName']
			 			+ '\'"' 
				 		+ ' class="btn_people"' 
			    		+ 'email=' + list[i]['email'] + " " 
			    		+ 'nickName=' + list[i]['nickName'] + " "
			    		+ 'firstName=' + list[i]['firstName'] + " "
						+ 'lastname=' + list[i]['lastname'] + " "
			 			+ 'id=' + id + " "
			 			+ '>' 
			    		+ list[i]['nickName'] 
			 			+ '</button>';
		}
	   	 return btnHtml;
    }

	 return {
		 getEmployees : getEmployees,
		 searchPeople : searchPeople
	 }

}]);