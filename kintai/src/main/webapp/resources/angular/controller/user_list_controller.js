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
						
						workInfoList += '<tr><td class=\"DateInfo\" email=\"park.siwon@a-s.com.co\">'+item.workDate+'</td><td>'+item.startTime
									 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
									 	+'</td><td>'+item.workTime+'</td><td><button date=\"'
								  		+item.workDate+'\" class=\"update_btn\">ok</button></td></tr>';
					});	
					$('#AllWorkTime').text(data[1]);
				}
				$('.WorkInfoTable').html(workInfoList);
				$scope.MonthWorkInfo();
		
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
				updateInfo = '<table class=\"table table-bordered\"><tr><td>'+item.workDate
							 +'</td><td><input type=\"time\" id=\"UstartTime\" value=\"'
							 +item.startTime+'\"></td><td><input type=\"time\" id=\"UendTime\" value=\"'
							 +item.endTime+'\"></td><td><input type=\"text\" id=\"UrestTime\" value=\"'
							 +item.restTime+'\"></td></tr></table>';
			}); 
		 		 
 		   comnService.commonModal('0051', updateInfo, '0037', function() {
				$scope.UpdateWorkInfo();
				return true;
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
    	
    	$scope.MonthWorkInfo = function(){
             $(".DateInfo").click(function(){

            
                var getDate = $(this).text();  
                var email = $(this).attr('email');

                var nowDate = $('.searchTime').val();
                Udate = [nowDate, getDate].join('-');
                
                $.ajax({
                   type:'post',
                   url:'MonthWorkInfo',
                   data:{
                      date:Udate,
                      email:email
                   },
                   success:function(data){
                      
                      var MonthDailyInfo;
                      
                      if(data[0].length==0){
                         
                    	  MonthDailyInfo = "";
                         
                      }else{
                         
                         $.each(data[0],function(index,item){
                            
                        	 MonthDailyInfo='<div class=\"Timeline\"><svg height=\"5\" width=\"100\"><line x1=\"0\" y1=\"0\" x2=\"200\" y2=\"0\"'
                                 +'style=\"stroke:#E0E0E0;stroke-width:5\"/></svg><div class=\"event1\"><div class=\"event1Bubble\"><div class=\"Day\">出勤</div></div>'
                                 +'<svg height=\"20\" width=\"20\"><circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#C92800\" />'
                                 +'</svg><div class=\"time1\">'+item.startTime+'</div></div><svg height=\"5\" width=\"300\">'
                                 +'<line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\" style=\"stroke:#ED4C00;stroke-width:5\" /></svg>'
                                 +'<div class=\"event2\"><svg height=\"20\" width=\"20\"><circle cx=\"10\" cy=\"11\" r=\"5\" fill=\"#C92800\" />'
                                 +'</svg><div class=\"time3\">'+item.endTime+'</div><div class=\"time2\">退勤</div></div><svg height=\"5\"'
                                 +' width=\"100\"><line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" style=\"stroke:#E0E0E0;stroke-width:5\" />'
                                 +'</svg></div><div class=\"monthDiv\"><table class="monthTable"><tr><th>休み:</th><td>'+item.restTime+'</td>'
                                 +'<th>総:</th><td>'+item.workTime+'</td></tr></table><div>';
                         });


                      }
                      
                      comnService.commonModal(Udate, MonthDailyInfo, '0037', function() {
                        $scope.UpdateWorkInfo();
                        return true;
                     });
                   }
                   
                });
             });
          }
	 
}]);