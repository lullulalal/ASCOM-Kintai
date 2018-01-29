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
<title>SB Admin - Start Bootstrap Template</title>
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

<body class="fixed-nav sticky-footer bg-dark" id="page-top" ng-app="ascomApp" ng-controller="comnCtrl">
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
		id="mainNav">
		<a class="navbar-brand" href="index.html"><img class="banner_top"
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

			<div class="breadcrumb2">
				<input type="text" id="date" size="10" readonly
					style="text-align: center;"> <input type="text" id="time"
					size="10" style="text-align: center;"> <input type="text"
					id="rest" size="10" style="text-align: center;">
			</div>

			<!-- Icon Cards-->
			<div class="row">
				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-warning o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="taikinInsertCheck()">退勤</div>
						</div>

					</div>
				</div>
			</div>
		</div>

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
				$('#rest').timeDropper();
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
						$(".breadcrumb").append(
								'<li class="breadcrumb-item active">' + data
										+ '</li>');
					},
					error : function() {
					}
				});
			}

			function taikinInsertCheck() {
				modal({
					type : 'confirm',
					title : 'Confirm',
					text : '帰りますか？',
					callback : function(result) {
						if (result == true) {
							taikinInsert();
						}
					}
				});
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

					},
					error : function() {
					}
				});
			}
		</script>
</body>

</html>
