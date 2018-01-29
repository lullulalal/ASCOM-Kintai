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
<link href="https://fonts.googleapis.com/earlyaccess/sawarabigothic.css"
	rel="stylesheet" />
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
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
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
				<li class="nav-item" data-toggle="tooltip" data-placement="right"
					title="Dashboard"><a class="nav-link" href="index.html"> <i
						class="fa fa-fw fa-dashboard"></i> <span class="nav-link-text">Dashboard</span>
				</a></li>
				<li class="nav-item" data-toggle="tooltip" data-placement="right"
					title="Charts"><a class="nav-link" href="charts.html"> <i
						class="fa fa-fw fa-area-chart"></i> <span class="nav-link-text">Charts</span>
				</a></li>
				<li class="nav-item" data-toggle="tooltip" data-placement="right"
					title="Tables"><a class="nav-link" href="tables.html"> <i
						class="fa fa-fw fa-table"></i> <span class="nav-link-text">Tables</span>
				</a></li>
				<li class="nav-item" data-toggle="tooltip" data-placement="right"
					title="Components"><a
					class="nav-link nav-link-collapse collapsed" data-toggle="collapse"
					href="#collapseComponents" data-parent="#exampleAccordion"> <i
						class="fa fa-fw fa-wrench"></i> <span class="nav-link-text">Components</span>
				</a>
					<ul class="sidenav-second-level collapse" id="collapseComponents">
						<li><a href="navbar.html">Navbar</a></li>
						<li><a href="cards.html">Cards</a></li>
					</ul></li>

				<li class="nav-item" data-toggle="tooltip" data-placement="right"
					title="Link"><a class="nav-link" href="#"> <i
						class="fa fa-fw fa-link"></i> <span class="nav-link-text">Link</span>
				</a></li>
			</ul>
			<ul class="navbar-nav sidenav-toggler">
				<li class="nav-item"><a class="nav-link text-center"
					id="sidenavToggler"> <i class="fa fa-fw fa-angle-left"></i>
				</a></li>
			</ul>
			<ul class="navbar-nav ml-auto">
				<li class="nav-item"><a class="nav-link" data-toggle="modal"
					data-target="#exampleModal"> <i class="fa fa-fw fa-sign-out"></i>Logout
				</a></li>
			</ul>
		</div>
	</nav>

	<div class="content-wrapper-gray">
		<div class="container-fluid">
			<!-- Breadcrumbs-->
			<ol class="breadcrumb">
				<li class="breadcrumb-item active">クリさん、今日もお疲れ様です。</li>
			</ol>

			<div class="breadcrumb2">
				<input type="datetime-local" class="input_date">
			</div>
			<!-- Icon Cards-->
			<div class="row">
				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-warning o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="shukinInsertCheck()">出勤</div>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-sm-6 mb-3">
					<div class="card text-white bg-danger o-hidden h-100">
						<div class="card-body">
							<div class="mr-5" onclick="vacationInsertCheck()">休み</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bootstrap core JavaScript-->
		<script src="./resources/vendor/jquery/jquery.min.js"></script>
		<script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		<!-- Core plugin JavaScript-->
		<!-- Custom scripts for all pages-->
		<script src="./resources/js/sb-admin.js"></script>
		<!-- modal -->
		<link href="./resources/css/jquery.modal.css" rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-atlant.css"
			rel="stylesheet">
		<link href="./resources/css/jquery.modal.theme-xenon.css"
			rel="stylesheet">
		<script src="./resources/js/jquery.modal.js"></script>

		<script>
			$(function() {
				var shukinChk = "${shukinCheck}";
				var vacationChk = "${vacationCheck}";
				
				if (shukinChk == "true" || vacationChk == "true") {
					$(".row").hide();
				}
			});

			var startTime;
			var workDate;

			function shukinInsertCheck() {
				var date = $(".input_date").val();

				startTime = date.replace('T', ' ');
				workDate = startTime.substr(0, 10);
				console.log(workDate);

				modal({
					type : 'confirm',
					title : 'Confirm',
					text : startTime,
					callback : function(result) {
						if (result == true) {
							shukinInsert();
						}
					}
				});
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
				modal({
					type : 'confirm',
					title : 'Confirm',
					text : '今日は休みですか？',
					callback : function(result) {
						if (result == true) {
							vacationInsert();
						}
					}
				});
			}

			function vacationInsert() {
				$.ajax({
					url : 'vacationInsert',
					type : 'POST',
					data : {
						email : "lullulalal@gmail.com"
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
