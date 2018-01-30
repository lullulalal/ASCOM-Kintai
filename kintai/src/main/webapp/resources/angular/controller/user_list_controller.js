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
					/*$.each(data[0],function(index,item){
						
						workInfoList += '<tr><td>'+item.workDate+'</td><td>'+item.startTime
									 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
									 	+'</td><td>'+item.workTime+'</td><td><button date=\"'
								  		+item.workDate+'\" class=\"update_btn\">ok</button></td></tr>';
					});	*/
					
					$.each(data[0],function(index,item){
						
						workInfoList += '<tr><td>'+item.workDate+'</td><td>'+item.startTime
									 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
									 	+'</td><td>'+item.workTime+'</td><td><span date=\"'
								  		+item.workDate+'\" class=\"update_btn\"><i class="fa fa-fw fa-wrench"></i></span></td></tr>';
					});
					
					
					
					$('#AllWorkTime').text(data[1]);
				}
				$('.WorkInfoTable').html(workInfoList);
				
				$scope.UpdateInfo();
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
	 
 			$.each(workInfo,function(index,item){
 				
 				updateInfo = '<table class=\"Updatetable\">'
					 +'<tbody><tr><th>出勤:</th><td><input type=\"time\" id=\"UstartTime\" value=\"'
					 +item.startTime+'\"></td><th>退勤:</th><td><input type=\"time\" id=\"UendTime\" value=\"'
					 +item.endTime+'\"></td></tr><tr><th>休み:</th><td><input type=\"text\" id=\"UrestTime\" value=\"'
					 +item.restTime+'\"></td></tr></tbody></table>';
 				
			});
		 
 		   comnService.commonModal(Udate, updateInfo, '0037', function() {
				$scope.UpdateWorkInfo();
				return true;
			}, function(){
				$('#UrestTime').timeDropper({
					setCurrentTime: false,
					textColor: '#FF9436',
					primaryColor: '#FF5E00',
                    borderColor: '#C92800',
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