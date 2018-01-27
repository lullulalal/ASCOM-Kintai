<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>ASCOM-SUPER</title>
  <!-- Bootstrap core CSS-->
  <link href="./resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="./resources/vendor/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="./resources/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="./resources/css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top" ng-app="ascomApp" ng-controller="comnCtrl">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="superAppSet"><img class="banner_top" src="./resources/img/logo_banner.png">ASCOM</a> 
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
    
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
 
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" href="superSetting">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">{{::getText('0007')}}</span>
          </a>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" href="appSetting">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">{{::getText('0042')}}</span>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>{{::getText('0021')}}</a>
        </li>
      </ul>
      
    </div>
  </nav>
  <div class="content-wrapper-white">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb3">
        <li>{{::getText('0007')}}</li>
      </ol>
      <!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <input type="date"><button type="button">検索</button></div>
        <div class="card-body2">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>日付</th>
                  <th>出勤時間</th>
                  <th>退勤時間</th>
                  <th>休み</th>
                  <th>勤務時間</th>
                  <th>修正</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01.01</td>
                  <td>09:00</td>
                  <td>18:00</td>
                  <td>1</td>
                  <td>8</td>
                  <td><button>ok</button></td>
                </tr>
                <tr>
                  <td>01.02</td>
                  <td>09:00</td>
                  <td>18:00</td>
                  <td>1</td>
                  <td>8</td>
                  <td><button>ok</button></td>
                </tr>
                <tr>
                  <td>01.03</td>
                  <td>09:00</td>
                  <td>18:00</td>
                  <td>1</td>
                  <td>8</td>
                  <td><button>ok</button></td>
                </tr>
                <tr>
                  <td>01.04</td>
                  <td>09:00</td>
                  <td>18:00</td>
                  <td>1</td>
                  <td>8</td>
                  <td><button>ok</button></td>
                </tr>
                <tr>
                  <td>01.05</td>
                  <td>09:00</td>
                  <td>18:00</td>
                  <td>1</td>
                  <td>8</td>
                  <td><button>ok</button></td>
                </tr>
 
              </tbody>
            </table>
            <div>
            	<table class="bottom_table">
            	 <thead>
                 <tr>
                  <th>今日の勤務時間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
              	  <td>160</td>
                </tr>
              </tbody>
            	</table>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
        </div>
      </div>
    </footer>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{::getText('0043')}}</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">{{::getText('0045')}}</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">{{::getText('0044')}}</button>
            <a class="btn btn-primary" href="logout">{{::getText('0021')}}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="./resources/vendor/jquery/jquery.min.js"></script>
    <script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="./resources/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="./resources/vendor/datatables/jquery.dataTables.js"></script>
    <script src="./resources/vendor/datatables/dataTables.bootstrap4.js"></script>

	  <!-- angular js -->
	  <script src="./resources/vendor/angular/angular.min.js"></script>
	  <script src="./resources/angular/app.js"></script>
	  <script src="./resources/angular/service/common_service.js"></script>
	  <script src="./resources/angular/controller/common_controller.js"></script>
  
  </div>
</body>

</html>