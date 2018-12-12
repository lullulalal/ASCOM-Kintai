<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>ASCOM</title>
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
    <a class="navbar-brand" href="superSetting"><img class="banner_top" src="./resources/img/logo_banner.png">ASCOM</a> 
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive"></div>
  </nav>
  <div class="content-wrapper-white">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb3">
        <li><span class='0042'></span></li>
      </ol>
      <!-- Example DataTables Card-->
      <div class="card mb-3">
          <div class="table-responsive" ng-controller="userSetCtrl">
          	<hr>
				<div style="padding : 4px">
					<table>
						<tr>
							<td>
								<span class='0030'></span>
							</td>
							<td>
								<select id="workLocation">
								  <option value="0028" class="0028" id="0028"></option>
								  <option value="0029" class="0029" id="0029"></option>
								</select>
							</td>
							<td>
								<div style="margin : 8px" >
								<button class="btn btn-secondary" ng-click="updateUserAppSetting('workLocation')"><span class='0047'></span></button></div>
				  			</td>
						</tr>
						<tr>
							<td>
								<span class='0031'></span>
							</td>
							<td>
								<select id="language">
								  <option value="JP" class="0053" id="JP"></option>
								  <option value="KR" class="0032" id="KR"></option>
								</select>
							</td>
							<td>
								<div style="margin : 8px" >
								<button class="btn btn-secondary" ng-click="updateUserAppSetting('language')"><span class='0047'></span></button></div>
				  			</td>
						</tr>

					</table>
				</div>

	        <hr>
		     	 <div style="padding : 4px">
		     	 	<table>
		     	 		<tr>
		     	 			<td colspan="2">
		     	 				<span class='0052'></span>
		     	 			</td>
		     	 		</tr>
		     	 		<tr>
		     	 			<td>
		     	 				<span class='0055'></span>
		     	 			</td>
		     	 			<td>
		     	 				<input type="password" id="pwd1" >
		     	 			</td>
		     	 		</tr>
		     	 		<tr>
		     	 			<td>
		     	 				 <span class='0056'></span>
		     	 			</td>
		     	 			<td>
		     	 				<input type="password" id="pwd2" >
		     	 			</td>
		     	 		</tr>
		     	 	</table>
		      	</div>

		      	<div align=right>
		    	  <button class="btn btn-secondary" ng-click="updateUserPassword()"><span class='0047'></span></button>
	      		</div>
	        <hr>
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
 

  <input type="hidden" value={{::getText('0007')}}>
  <input type="hidden" value={{::getText('0043')}}>
  <input type="hidden" value={{::getText('0045')}}>
  <input type="hidden" value={{::getText('0044')}}>
  <input type="hidden" value={{::getText('0047')}}>
  
  <!-- menu -->
 	<input type="hidden"  value={{::getText('0034')}}>
	<input type="hidden"  value={{::getText('0035')}}>
	<input type="hidden"  value={{::getText('0036')}}>
	<input type="hidden"  value={{::getText('0046')}}>
	<input type="hidden"  value={{::getText('0013')}}>
	<input type="hidden" value={{::getText('0042')}}>
	<input type="hidden" value={{::getText('0021')}}>
	
  <input type="hidden" value={{::getText('0030')}}>
  <input type="hidden" value={{::getText('0031')}}>
  <input type="hidden" value={{::getText('0052')}}>
  
  <input type="hidden" value={{::getText('0053')}}>
  <input type="hidden" value={{::getText('0032')}}>
  
  <input type="hidden" value={{::getText('0055')}}>
  <input type="hidden" value={{::getText('0056')}}>
  
    <!-- Bootstrap core JavaScript-->
    <script src="./resources/vendor/jquery/jquery.min.js"></script>
    <script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="./resources/vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="./resources/vendor/datatables/jquery.dataTables.js"></script>
    <script src="./resources/vendor/datatables/dataTables.bootstrap4.js"></script>
    
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
  	<script src="./resources/angular/service/user_setting_service.js"></script>
  	<script src="./resources/angular/controller/user_setting_controller.js"></script>
	
</body>

</html>