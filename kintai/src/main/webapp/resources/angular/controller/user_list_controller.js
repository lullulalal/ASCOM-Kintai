'use strict';

app.controller('userCtrl', ['$scope', 'comnService', function($scope, comnService) {
	var dayOfWeekCodes = ['', '0066', '0068', '0069', '0070', '0071', '0072', '0073' ];
	var dayOfWeekStrs = {'' : ''};
	
    angular.element(document).ready(function () {
		$(document).ready(function(){
	    	var date = NowDate();
	    
	    	for(var i = 1; i < dayOfWeekCodes.length; i++) {
	    		
		    	 comnService.getText2(dayOfWeekCodes[i], function(dayOfWeekStr, code){
		    		 dayOfWeekStrs[code] = dayOfWeekStr;

		    		 if(Object.keys(dayOfWeekStrs).length == dayOfWeekCodes.length){
		    			 $scope.GetWorkInfoList(date);
		    		 }
		    	 });
	    	}
	    	
	    	$("#searchInfo").click(function(){
	    		$scope.InputDate();
	    	});
	    	
		});
    });
    
	
    //今月の勤務表をもらうため現在の時間を型変換してインプットボックスに入れる機能
	function NowDate(){
		
	    var d = new Date();
        var month = '' + (d.getMonth() + 1);
        var year = d.getFullYear();
	    
	    if (month.length < 2) month = '0' + month;
	    
	    var date = [year, month].join('-');
	    
	    $('.searchTime').val(date);
	    
	    return date;
	    
	}
	
      $scope.InputDate = function(){
    	
    	var date = $('.searchTime').val();

    	 $scope.GetWorkInfoList(date);
    }
    
	//入れた変数の勤務表をもらう機能
    $scope.GetWorkInfoList = function(date){
    	
  		$.ajax({
			type:"post",
			url:"workInfo",
			data:{
				date:date
			},
			success:function(data){


					var workInfoList;
		
					if(data[0].length==0){
							
						workInfoList = '';
						$('#AllWorkTime').text("0");
						$('.WorkInfoTable').html(workInfoList);
							
						$scope.UpdateInfo();
							
					}else{
						/*$.each(data[0],function(index,item){
								
							workInfoList += '<tr><td>'+item.workDate+'</td><td>'+item.startTime
										 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
										 	+'</td><td>'+item.workTime+'</td><td><button date=\"'
									  		+item.workDate+'\" class=\"update_btn\">ok</button></td></tr>';
						});	*/
							
						$.each(data[0],function(index,item){
						   var fontColor = '';
						   if(item.dayOfWeek*1 == 1)  fontColor = 'red';
						   else if (item.dayOfWeek*1 ==7) fontColor = 'blue';
						   else fontColor = 'black';
						   
						   var rowColor = '';
						   if (item.workState == '0012') rowColor = '#fff9f9';
						   else rowColor = 'white';
							workInfoList += '<tr bgcolor="' + rowColor +'"><td><font color="' + fontColor + '">'+item.workDate+ '(' +dayOfWeekStrs[dayOfWeekCodes[item.dayOfWeek]] + ')' +'</font></td><td>'+item.startTime.substring(0, 5)
										 	+'</td><td>'+item.endTime.substring(0, 5)+'</td><td>'+item.restTime
										 	+'</td><td>'+item.workTime+'</td><td><span date=\"'
									  		+item.workDate+'\" class=\"update_btn\"><i class="fa fa-fw fa-wrench"></i></span></td></tr>';
						});
						
						var hourStr = '';
						var minuteStr = '';
						comnService.getText2('0048', function(text){
							hourStr = text;
							comnService.getText2('0049', function(text){
								minuteStr = text;
								var newTimeStr = data[1].replace(":", hourStr);
								newTimeStr += minuteStr;
								
								$('#AllWorkTime').text(newTimeStr);
								$('.WorkInfoTable').html(workInfoList);
									
								$scope.UpdateInfo();
								
							});
						});	

					}
			}
		}); 
  		
    }
    
    var UpDate;
    var Udate;
    
	//修正ボタンを押せば該当する修正したい日の情報をデータベースでもらう機能
    $scope.UpdateInfo = function(){
    	
    	$('.update_btn').click(function(){

    		UpDate = $(this).attr("date");

    		var ym = $('.searchTime').val();
    		Udate = [ym, UpDate].join('-');


    		$.ajax({
    			type:"post",
    			url:"workInfo",
    			data:{
    				date:Udate
    			},
    			success:function(data){
    				$scope.UpdateBox(data[0]);	
    				
    			}
    		});
    	});
    }
    
    
 	//データベースでもらった情報をアラートで見える機能
    $scope.UpdateBox = function(workInfo){
		 
		 var updateInfo;
		 var shukinStr = '';
		 var takinStr = '';
		 var yasumiStr = '';
		 
		 comnService.getText2('0011', function(text){
			 shukinStr = text;
			 comnService.getText2('0016', function(text){
				 takinStr = text;
				 comnService.getText2('0017', function(text){
					 yasumiStr = text;
					 comnService.getText2('0067', function(text){
						 	
				 			$.each(workInfo,function(index,item){
				 				
				 				updateInfo = '<table align="center" class=\"Updatetable\">'
									 + '<tr><th>' + shukinStr + '</th>'
									 + '    <th>' + takinStr + '</th></tr>'
									 + '<tr><td><input type=\"text\" class="seTime" id=\"UstartTime\" value=\"'
									 + item.startTime+'\"></td>'
									 + '<td><input type=\"text\" class="seTime" id=\"UendTime\" value=\"'
									 + item.endTime+'\"></td>'
									 + '<tr><th colspan="2">' + yasumiStr + '<font size=1>(' + text +  ')</font></th><tr>'
									 + '<tr><td colspan="2"><input style="width:130px" type=\"text\" class="seTime" id=\"UrestTime\" value=\"'
									 + item.restTime+'\"></td></tr></table>';
				 				
							});
						 
				 		   comnService.commonModal(Udate, updateInfo, '0037', function() {
								$scope.UpdateWorkInfo();
								return true;
							}, function(){
								$('.seTime').timeDropper({
									setCurrentTime: false,
									textColor: '#FF9436',
									primaryColor: '#FF5E00',
				                    borderColor: '#C92800',
								});
							});
			 		   
					 });
					 
				 });
			 });
		 });

 		   
 		   
 			 
		}
	 
	 
	 //アラートで情報を修正する機能
    	$scope.UpdateWorkInfo = function(){
		 
		 var UstartTime = $('#UstartTime').val();
		 var UendTime = $('#UendTime').val();
		 var UrestTime = $('#UrestTime').val();

    	var ym = $('.searchTime').val();
    	var Udate = [ym, UpDate].join('-');

  		 $.ajax({
			 type:'post',
			 url:'UpdateWorkInfo',
			 data:{
				 workDate:Udate,
	             startTime:UstartTime,
	             endTime:UendTime,
	             restTime:UrestTime
			 },
			 success:function(data){
				 if(data==="success"){
					 $scope.InputDate();
				 }else{
					return false;
				 }
			 }
		 });  
	 }
	 
}]);