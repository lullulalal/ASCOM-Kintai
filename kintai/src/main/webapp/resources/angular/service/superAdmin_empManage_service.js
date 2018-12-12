'use strict';

app.factory('superAdminEmpMngService', ['comnService', '$compile' , '$rootScope',function(comnService, $compile, $rootScope){
	
   var peopleListJsn ;
   var scope;
   
   function initScope(sc){
	   scope = sc;
   }
	
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
				if(handle != undefined && handle != null)
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
						+ peopleListJsn[i]['firstName']  +' '
						+ peopleListJsn[i]['phone']  +' ';
	
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
		
		   	 $('#people-list').html($compile(listHtml)(scope));
		   	 
		});
		

    }
    
    function getBtnList(list, year){
    	
    	var btnHtml = '';
		
	   	for (var i = 0; i < list.length; i++) {
	   		 var id = 'people' + i;
	   		 
			 btnHtml += 
			    		 '<button ng-click="showEmpInfoDlg('
				 		+ '\'' + list[i]['email'] + '\','
			 			+ '\'' + list[i]['nickName'] +'\','
			 			+ '\'' + list[i]['firstName'] +'\','
			 			+ '\'' + list[i]['lastName'] +'\','
			 			+ '\'' + list[i]['department'] +'\','
			 			+ '\'' + list[i]['phone'] +'\')"'
			 			+ ' class="btn_people"'
			 			+ '>' 
			    		+ list[i]['nickName'] 
			 			+ '</button>';
		}
	   	 return btnHtml;
    }
    
    function showEmpInfoDlg(email, nickName, firstName, lastName, department, phone, authority){
    	var btnStr = "0082";
    	
    	if(email != '' && email!= null && email != undefined){
    		btnStr = "0047";
    	}
    	
    	var authStr = "<option value='2' select>user</option>" + 
    	              "<option value='1'>admin</option>" ;
    	
    	if(authority == '1'){
    		authStr = "<option value='1' select>admin</option>" +
    			      "<option value='2'>user</option>" ;
    	}
    	var depStr = "<option value='0083'>human resources</option>" +
		"<option value='0084'>Sales</option>" +
		"<option value='0085'>Development</option>" +
		"<option value='0086'>Design</option>" +
		"<option value='0087'>General Affairs</option>";
    	if(department == '0083'){
    		depStr = "<option value='0083'>human resources</option>" +
			"<option value='0084'>Sales</option>" +
			"<option value='0085'>Development</option>" +
			"<option value='0086'>Design</option>" +
			"<option value='0087'>General Affairs</option>";
    	}else if(department == '0084'){
    		depStr = "<option value='0084'>Sales</option>" +
    		"<option value='0083'>human resources</option>" +
			"<option value='0085'>Development</option>" +
			"<option value='0086'>Design</option>" +
			"<option value='0087'>General Affairs</option>";
    	}else if(department == '0085'){
    		depStr = "<option value='0085'>Development</option>" +
    		"<option value='0083'>human resources</option>" +
			"<option value='0084'>Sales</option>" +
			"<option value='0086'>Design</option>" +
			"<option value='0087'>General Affairs</option>";
    	}else if(department == '0086'){
    		depStr = "<option value='0086'>Design</option>" +
    		"<option value='0083'>human resources</option>" +
			"<option value='0084'>Sales</option>" +
			"<option value='0085'>Development</option>" +
			"<option value='0087'>General Affairs</option>";
    	}else if(department == '0087'){
    		depStr = "<option value='0087'>General Affairs</option>" +
    		"<option value='0083'>human resources</option>" +
			"<option value='0084'>Sales</option>" +
			"<option value='0085'>Development</option>" +
			"<option value='0086'>Design</option>";
    	}

    	var title = "Employee Info";
//    	if(email != '' && email!= null && email != undefined){
//    		title = "Employee Info " + '<button class="btn btn-secondary" ' +
//    				"ng-click='deleteEmployee(\"" + email + "\")'"+ '>Delete</button>' ;
//    			    
//    	}
    	
    	var addOn = '';
//		if(email != '' && email!= null && email != undefined){
//			addOn = "<tr><td>account state </td><td><select name='state' id='state'>" +
//					depStr +
//					"</select></td></tr>" +
//		}
    	
    	comnService.commonModal(title,
    			"<table>" +
    			"<tr><td>email</td><td><input id='email' type='text' size='30' " + "value=\'" + email +"\' ></td></tr> " +
    			"<tr><td>password</td><td><input id='password' type='password' size='30'></td></tr> " +
    			"<tr><td>nick name</td><td><input id='nickName' type='text' size='30' " + "value=\'" + nickName +"\' ></td></tr> " +
    			"<tr><td>first name </td><td><input id='firstName' type='text' size='30' " + "value=\'" + firstName +"\' ></td></tr> " +
    			"<tr><td>last name </td><td><input id='lastName' type='text' size='30' " + "value=\'" + lastName +"\' ></td></tr> " +
    			"<tr><td>department </td><td><select name='dep' id='dep'>" +
    			depStr +
    			"</select></td></tr>" +
    			"<tr><td>phone </td><td><input id='phone' type='text' size='30' " + "value=\'" + phone +"\' ></td></tr> " +
    			"<tr><td>authority</td><td><select name='auth' id='auth'>" +
    			authStr + 
    			"</select></td></tr>" +
    			addOn +
    			"</table>", 
    	btnStr, function() {
    		var email = $('#email').val();
    		var password = $('#password').val();
    		var nickName = $('#nickName').val();
    		var firstName = $('#firstName').val();
    		var lastName = $('#lastName').val();
    		var department = $('#dep').val();
    		var phone = $('#phone').val();
    		var authority = $('#auth').val();
    		var url = 'insertEmployee';
    		if(btnStr == '0047')
    			url = 'updateEmployee';
    		
    		$.ajax({
    			url : url, 
    			type: 'post', 
    			data : {
    				email : email,
    				password : password,
    				nickName : nickName, 
    				firstName :firstName, 
    				lastName : lastName, 
    				department : department, 
    				phone : phone, 
    				authority : authority
    			}, 
    			success: function(response) { 

	    			getEmployees(function(){
	    				searchPeople( $('#search').val());
	    			});   
    		
    			}
    		});
    		return true;
    	});
    }

	 return {
		 getEmployees : getEmployees,
		 searchPeople : searchPeople,
		 showEmpInfoDlg : showEmpInfoDlg,
		 initScope : initScope
	 }

}]);