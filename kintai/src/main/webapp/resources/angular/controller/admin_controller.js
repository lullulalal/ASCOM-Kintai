'use strict';

app.controller('adminCtrl', ['$scope', '$compile', 'adminService', 'comnService', function($scope, $compile, adminService, comnService) {

    angular.element(document).ready(function () {
		$(document).ready(function(){
			$("#workState option:first").remove();
			//날짜 받아 오기
			$('#date').val("2018-01-21");
			
			adminService.getWorkInfoByDay( '2018-01-21', '0029', function(response){
				printHtml(response);
			});
		});
    });
    
    $scope.changeWorkState = function() {
    	
    	var state = $('#workState option:selected').val();
    	var date = $('#date').val();
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
			    		+ list[i]['nickName'] 
			    		+ '</button>';
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
    						
        					var shukin = $('#' + id).attr('startTime');
        					var taikin = $('#' + id).attr('endTime');
        					var yasumi = $('#' + id).attr('restTime');
        					var kinmu = $('#' + id).attr('workTime');
        					var workDate = $('#' + id).attr('workDate');
        					
        					var title = $('#' + id).attr('firstname') + ' ' +$('#' + id).attr('lastname') + ' - ' + workState;
        					
        					var html = '';
        					
        					html = '<table id="workInfoTable" class="table table-bordered table-hover">'
    	   					     +		'<tr><th>' + '日付' + '</th>'
    						     +		 	'<td>' + workDate + '</td></tr>'
        					     +		'<tr><th>' + shukinStr + '</th>'
        					     +		 	'<td>' + shukin + '</td></tr>'
        					     +		'<tr><th>' + taikinStr + '</th>'
        					     +		 	'<td>' + taikin + '</td></tr>'    
        					     +		'<tr><th>' + yasumiStr + '</th>'
        					     +		 	'<td>' + yasumi + '</td></tr>' 
        					     +		'<tr><th>' + kinmuStr + '</th>'
        					     +		 	'<td>' + kinmu + '</td></tr>' 
    		    				 +	'</table>';
        					
        					comnService.commonModal(title, html, '0037');
    					});

    				});
    			});
    		});
    	});

    };
}]);