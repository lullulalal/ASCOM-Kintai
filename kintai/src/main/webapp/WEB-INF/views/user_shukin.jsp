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
<link href="https://fonts.googleapis.com/earlyaccess/sawarabigothic.css"
	rel="stylesheet" />
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
			<ol class="breadcrumb"></ol>
			<ol class="breadcrumb4"></ol>
			<div class="breadcrumb2">
				<input type="text" id="date" readonly style="text-align: center;">
				<input type="text" id="time" style="text-align: center;">
			</div>
			<!-- Icon Cards-->
			<div class="row">
				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-warning o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="shukinInsertCheck()">
								<span class='0011'></span>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-danger o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="vacationInsertCheck()">
								<span class='0012'></span>
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
		<!-- 出勤 -->
		<input type="hidden" value={{::getText('0011')}}>
		<!-- 休み -->
		<input type="hidden" value={{::getText('0012')}}>
			<!-- logout modal -->
		<input type="hidden" value={{::getText('0043')}}>
	 	<input type="hidden" value={{::getText('0045')}}>
	  	<input type="hidden" value={{::getText('0044')}}>
		<input type="hidden"  value={{::getText('0021')}}>
			
		<!-- Bootstrap core JavaScript-->
		<script src="./resources/vendor/jquery/jquery.min.js"></script>
		<script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		<!-- Core plugin JavaScript-->
		<script src="./resources/time/timedropper.js"></script>
		<link rel="stylesheet" type="text/css"
			href="./resources/time/timedropper.css">
		<!-- Custom scripts for all pages-->
		<script src="./resources/js/sb-admin.js"></script>
		<!-- modal -->
		<link href="./resources/css/jquery.modal.css" rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-atlant.css"
			rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-xenon.css"
			rel="stylesheet">
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
								'<li class="breadcrumb-item active">' + data
										+ '</li>');
					},
					error : function() {
					}
				});
			}

			var startTime;
			function shukinInsertCheck() {
				startTime = $("#time").val();
				
				var modalFunc = angular.element(document.getElementById('page-top')).scope().commonModal;
				
				modalFunc('0011', '0061', '0037', function() {
					shukinInsert();
				});
				
				
/* 				modal({
					type : 'confirm',
					title : 'Confirm',
					text : startTime,
					callback : function(result) {
						if (result == true) {
							shukinInsert();
						}
					}
				}); */
			}

			function shukinInsert() {
				$.ajax({
					url : 'shukinInsert',
					type : 'POST',
					data : {
						workDate : workDate,
						startTime : startTime
					},
					success : function() {
						window.location.href = 'shukinCheck';
					},
					error : function() {
					}
				});
			}

			function vacationInsertCheck() {
				var modalFunc = angular.element(document.getElementById('page-top')).scope().commonModal;
				
				modalFunc('0012', '0060', '0037', function() {
					vacationInsert();
				});
				
				
				/*modal({
					type : 'confirm',
					title : 'Confirm',
					text : '今日は休みですか？',
					callback : function(result) {
						if (result == true) {
							vacationInsert();
						}
					}
				});*/
			}

			function vacationInsert() {
				$.ajax({
					url : 'vacationInsert',
					type : 'POST',
					data : {
					},
					success : function() {
						window.location.href = 'shukinCheck';
					},
					error : function() {
					}
				});
			}
		</script>
</body>
</html>
