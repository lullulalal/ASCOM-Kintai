'use strict';

app.controller('adminCtrl', ['$scope', '$compile', 'adminService', 'comnService', function($scope, $compile, adminService, comnService) {

    angular.element(document).ready(function () {
		$(document).ready(function(){
			$("#workState option:first").remove();

			adminService.getCurrentDate(function(date){

				$('#date').val(date);
			
				adminService.getWorkInfoByDay( date, '0029', function(response){
					printHtml(response);
				});
			});
			
		});
    });
    
    $scope.changeWorkState = function() {
    	
    	var state = $('#workState option:selected').val();
    	var date = $('#date').val();
    	if( date == null || date == '') return;
    	adminService.getWorkInfoByDay( date , state, function(response){
    		printHtml(response);
    		$compile($scope.workState);
    	});
    };
    
    function printHtml(jsn){
    	var listHtml = '';
    	
    	var badList = jsn['bad'];
    	var warnList = jsn['warn'];
    	var goodist = jsn['good'];
    	var yasumiist = jsn['yasumi'];
    	 
    	 if(badList.length != 0)
    		 listHtml += getBtnList(badList, 'bad');
    	 if(warnList.length != 0)
    		 listHtml += getBtnList(warnList, 'warn');
    	 if(goodist.length != 0)
    		 listHtml += getBtnList(goodist, 'good');
    	 if(yasumiist.length != 0)
    		 listHtml += getBtnList(yasumiist, 'yasumi');
    	 
    	 $('#people-list').html('');

    	 $('#people-list').html($compile(listHtml)($scope));
    }

    function getBtnList(list, state){
    	var btnHtml = '';
	   	for (var i = 0; i < list.length; i++) {
	   		 var id = 'people' + state + i;
	   		 
			 btnHtml += 
			    		 '<button class="btn_'+ state +' "' 
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
			 if(state != 'yasumi'){
				 btnHtml += 'ng-click="peopleClick(' + "'" + id + "'" + ')"'  + " ";
			 }
			 
			 btnHtml +=
			    		 '>' 
			    		+ list[i]['nickName'] ;
			 if(state != 'yasumi'){
				 btnHtml +=
					 	 '<br><font size="2">'
			 			+ list[i]['startTime'].substring(0, 5)
			 			+ ' - '
			 			+ list[i]['endTime'].substring(0, 5)
			    		+ '</font>'
			 }  		
			 btnHtml +=	'</button>';
		}
	   	 return btnHtml;
    }
    
    $scope.peopleClick = function(id) {
    	comnService.getText2('0011', function(text) {
    		var shukinStr = text;
    		comnService.getText2('0016', function(text){
    			var taikinStr = text;
    			comnService.getText2('0017', function(text){
    				var yasumiStr = text;
    				comnService.getText2('0027', function(text){
    					var kinmuStr = text;
    					comnService.getText2($('#' + id).attr('workState'), function(text){
        					var workState = text;
        					comnService.getText2('0023', function(text){
	    						
	        					var shukin = $('#' + id).attr('startTime');
	        					var taikin = $('#' + id).attr('endTime');
	        					var yasumi = $('#' + id).attr('restTime');
	        					var kinmu = $('#' + id).attr('workTime');
	        					var workDate = $('#' + id).attr('workDate');
	        					
	        					var title = $('#' + id).attr('firstname') + ' ' +$('#' + id).attr('lastname') + ' - ' + workState;
	        					
	        					var html = '';
	        					
	        					html = '<table id="workInfoTable" class="table table-bordered table-hover">'
	    	   					     +		'<tr align="center"><th>' + text + '</th>'
	    						     +		 	'<td>' + workDate + '</td></tr>'
	        					     +		'<tr align="center"><th>' + shukinStr + '</th>'
	        					     +		 	'<td>' + shukin + '</td></tr>'
	        					     +		'<tr align="center"><th>' + taikinStr + '</th>'
	        					     +		 	'<td>' + taikin + '</td></tr>'    
	        					     +		'<tr align="center"><th>' + yasumiStr + '</th>'
	        					     +		 	'<td>' + yasumi + '</td></tr>' 
	        					     +		'<tr align="center"><th>' + kinmuStr + '</th>'
	        					     +		 	'<td>' + kinmu.substring(0,5) + '</td></tr>' 
	    		    				 +	'</table>';
	        					
	        					comnService.commonModal(title, html, '0037');
    						});
    					});

    				});
    			});
    		});
    	});

    };
}]);