'use strict';

app.controller('userCtrl', ['$scope', 'comnService', function($scope, comnService) {

    angular.element(document).ready(function () {
		$(document).ready(function(){
	    	var date = NowDate();
        	
	    	$scope.GetWorkInfoList(date);
	    	
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
					
				}else{
					$.each(data[0],function(index,item){
						
						workInfoList += '<tr><td>'+item.workDate+'</td><td>'+item.startTime
									 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
									 	+'</td><td>'+item.workTime+'</td><td><button date=\"'
								  		+item.workDate+'\" class=\"update_btn\">ok</button></td></tr>';
					});	
					$('#AllWorkTime').text(data[1]);
				}
				$('.WorkInfoTable').html(workInfoList);
				
				$scope.UpdateInfo();
			}
		}); 
  		
    }
    
    var UpDate;
	//修正ボタンを押せば該当する修正したい日の情報をデータベースでもらう機能
    $scope.UpdateInfo = function(){
    	
    	$('.update_btn').click(function(){

    		UpDate = $(this).attr("date");

    		var ym = $('.searchTime').val();
    		var Udate = [ym, UpDate].join('-');


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
 			$.each(workInfo,function(index,item){
				updateInfo = '<table class=\"table table-bordered\"><tr><td>'+item.workDate
							 +'</td><td><input type=\"time\" id=\"UstartTime\" value=\"'
							 +item.startTime+'\"></td><td><input type=\"time\" id=\"UendTime\" value=\"'
							 +item.endTime+'\"></td><td><input type=\"text\" id=\"UrestTime\" value=\"'
							 +item.restTime+'\"></td></tr></table>';
			}); 
		 		 
		   var title = comnService.getText('0051');
		   var text = updateInfo;
		   var btnVal = comnService.getText('0037');
			   
		   var modalObj =  {
		        'type' : 'success',
		        'title' : title,
		        'text' : text,
				'buttons' : [{
				'text': 'OK',
				'val': btnVal,
				'eKey' : true,
				'addClass': 'btn-orange btn-square',
				'onClick': function() {
						$scope.UpdateWorkInfo();
						return true;
					}
				}]
		   } 
		   comnService.commonModal(modalObj);		
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
				 startTime:[Udate,UstartTime].join('-'),
				 endTime:[Udate,UendTime].join('-'),
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