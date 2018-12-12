<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>ASCOM</title>
<!-- Bootstrap core CSS-->
<link href="./resources/vendor/bootstrap/css/bootstrap.css"
	rel="stylesheet">
<!-- Custom fonts for this template-->
<link href="./resources/vendor/font-awesome/css/font-awesome.css"
	rel="stylesheet" type="text/css">
<!-- Page level plugin CSS-->
<link href="./resources/vendor/datatables/dataTables.bootstrap4.css"
	rel="stylesheet">
<!-- Custom styles for this template-->
<link href="./resources/css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top"
	ng-app="ascomApp" ng-controller="comnCtrl">
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
		id="mainNav">
		<a class="navbar-brand" href="#"><img class="banner_top"
			src="./resources/img/logo_banner.png">ASCOM</a>
		<button class="navbar-toggler navbar-toggler-right" type="button"
			data-toggle="collapse" data-target="#navbarResponsive"
			aria-controls="navbarResponsive" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive"></div>
	</nav>

	<div class="content-wrapper-gray">
		<div class="container-fluid">
			<!-- Breadcrumbs-->
			<ol class="breadcrumb3">Notice</ol>
			<ol class="breadcrumb4"></ol>
			<div class="breadcrumb2">
				<table style="width:200px" align="center">
				  <tr>
				  	<td style="color:white"><span class='0023'></span></td>
				  	<td style="color:white"><span class='0016'></span></td>
				  </tr>
				  <tr>
				    <td><input type="text" id="date" size="10" readonly style="text-align: center;"> </td>
				    <td><input type="text" id="time" size="10" readonly style="text-align: center;"></td> 
				  </tr>
				  <tr>
				  	<td colspan="2" style="color:white"><span class='0017'></span></td>
				  </tr>
				  <tr>
				  	<td colspan="2"　 style="color:white"><input type="text" id="rest" size="10" readonly style="text-align: center;">
				  					<font size=2　>(<span class='0067'></span>)</font></td>
				  </tr>
				<!-- <input type="text" id="date" size="10" readonly style="text-align: center;"> 
				<input type="text" id="time" size="10" readonly style="text-align: center;"> 
				<input type="text" id="rest" size="10" readonly style="text-align: center;"> -->

				
				</table>

			</div>

			<!-- Icon Cards-->
			<div class="row">
				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-warning o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="taikinInsertCheck()">
								<span class='0016'></span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title_logout" id="exampleModalLabel"><span class='0043'></span></h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body"><span class='0045'></span></div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal"><span class='0044'></span></button>
            <a class="btn btn-primary" href="logout"><span class='0021'></span></a>
          </div>
        </div>
      </div>
    </div>

		<!-- 退勤 -->
		<input type="hidden" value={{::getText('0016')}}>
		<!-- 休み時間 -->
		<input type="hidden" value={{::getText('0017')}}>
		<!-- 日付 -->
		<input type="hidden" value={{::getText('0023')}}>

		<!-- logout modal -->
		<input type="hidden" value={{::getText('0043')}}>
	 	<input type="hidden" value={{::getText('0045')}}>
	  	<input type="hidden" value={{::getText('0044')}}>
		<input type="hidden" value={{::getText('0021')}}>
		
		<!-- 時間:分 -->
		<input type="hidden" value={{::getText('0067')}}>
		
		<!-- Bootstrap core JavaScript-->
		<script src="./resources/vendor/jquery/jquery.min.js"></script>
		<script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		
		<!-- Core plugin JavaScript-->
		<script src="./resources/time/timedropper.js"></script>
		<link rel="stylesheet" type="text/css" href="./resources/time/timedropper.css">
		<script src="./resources/mobitime/mobiscroll.jquery.min.js"></script>
		<link rel="stylesheet" type="text/css" href="./resources/mobitime/mobiscroll.jquery.min.css">

		<!-- Custom scripts for all pages-->
		<script src="./resources/js/sb-admin.js"></script>
		
		<!-- modal -->
		<link href="./resources/css/jquery.modal.css" rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-atlant.css" rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-xenon.css" rel="stylesheet">
		<script src="./resources/js/jquery.modal.js"></script>

		<!-- angular js -->
		<script src="./resources/vendor/angular/angular.min.js"></script>
		<script src="./resources/angular/app.js"></script>
		<script src="./resources/angular/service/common_service.js"></script>
		<script src="./resources/angular/controller/common_controller.js"></script>

		<script>
			$(function() {
				getComment();
				timeInit();
			});

			var workDate;
			function timeInit() {
				$('#time').timeDropper();
				
				$.ajax({
					url : 'currentRestTime',
					type : 'POST',
					datatype : 'json',
					success : function(data) {
						if (data == null || data == '') data='01:00'
						$('#rest').val(data);
						$('#rest').timeDropper({
							setCurrentTime: false
						});
					},
					error : function() {
					}
				});
				

				
				$.ajax({
					url : 'currentTime',
					type : 'POST',
					datatype : 'json',
					success : function(data) {
						$("#date").val(data);
						workDate = data;
					},
					error : function() {
					}
				});
			}

			function getComment() {
				$.ajax({
					url : 'getComment',
					type : 'POST',
					datatype : 'json',
					success : function(data) {
						$(".breadcrumb4").append(
								'<li class=""><span style="word-break:break-all">' + data
										+ '</span></li>');
					},
					error : function() {
					}
				});
			}
			
		    function updateCheck(start, end, rest){
		    	   
		    	var hStart = start.substring(0, 2);
		    	var mStart = start.substring(3, 5);
		    	var sStart = hStart*1*3600 + mStart*1*60;
		    	
		    	var hEnd = end.substring(0, 2);
		    	var mEnd = end.substring(3, 5);
		    	var sEnd = hEnd*1*3600 + mEnd*1*60;
		    	
		    	var hRest = rest.substring(0, 2);
		    	var mRest = rest.substring(3, 5);
		    	var sRest = hRest*1*3600 + mRest*1*60;
		    	
		    	if( (sEnd - sStart - sRest) < 0 )
		    		return false;
		    	
		    	return true;
		    }
		    

			function taikinInsertCheck() {

				var endTime = $("#time").val();
				var restTime = $("#rest").val();
				
				var uDate = $("#date").val();
	    		$.ajax({
	    			type:"post",
	    			url:"workInfo",
	    			data:{
	    				date:uDate
	    			},
	    			success:function(data){
	    				var modalFunc = angular.element(document.getElementById('page-top')).scope().commonModal;
	    				
	    				if ( updateCheck(data[0][0].startTime.substring(0, 5), endTime, restTime) == false) {
		    				modalFunc('0077', '0078', '0037');
	    					return;
	    				}

	    				modalFunc('0016', '0059', '0037', function() {
	    						taikinInsert();
	    				});
	    			}
	    		});
				

				
			/*	modal({
					type : 'confirm',
					title : 'Confirm',
					text : '帰りますか？',
					callback : function(result) {
						if (result == true) {
							taikinInsert();
						}
					}
				});*/
			}

			function taikinInsert() {
				var endTime = $("#time").val();
				var restTime = $("#rest").val();
				
				$.ajax({
					url : 'taikinInsert',
					type : 'POST',
					data : {
						workDate : workDate,
						endTime : endTime,
						restTime : restTime
					},
					success : function() {
						window.location.href = 'workappInfoPage';
					},
					error : function() {
					}
				});
			}
		</script>
</body>

</html>
