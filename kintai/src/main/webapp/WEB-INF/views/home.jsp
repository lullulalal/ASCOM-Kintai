<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>

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
  <!-- Custom styles for this template-->
  <link href="./resources/css/sb-admin.css" rel="stylesheet">
</head>

<body class="bg-dark" ng-app="ascomApp" ng-controller="comnCtrl" >
  <div class="container">
    <div class="main_logo">
  	 <div class="main_logo_inner">
	   <img class="main_logo_top" src="./resources/img/logo_top.png">
  	   <img class="main_logo_bottom" src="./resources/img/logo_bottom.png">
   	 </div>
   	 
   	 <img class="main_logo_txt" src="./resources/img/logo_txt.png">
  	</div>
    <div class="card card-login mx-auto mt-5">
      <div class="card-header"><span class='0006'></span></div>
      <div class="card-body">
        <form action="login" method="post" id="loginForm">
          <div class="form-group">
            <label for="exampleInputEmail1"><span class='0001'></span></label>
            <input class="form-control" type="text" id="email" name="email" >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1"><span class='0003'></span></label>
            <input class="form-control" type="password" id="pwd" name="pwd" >
          </div>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" name="autoLogin" type="checkbox" checked><span class='0005'></span></label>
            </div>
          </div>
          <a class="btn btn-primary btn-block" onClick="javascript:login();"><span class='0006'></span></a>
        </form>
      </div>
    </div>
  </div>
  
  <input type="hidden" value={{::getText('0006')}}>
  <input type="hidden" value={{::getText('0005')}}>
  <input type="hidden" value={{::getText('0003')}}>
  <input type="hidden" value={{::getText('0001')}}>

  
  <!-- Bootstrap core JavaScript-->
  <script src="./resources/vendor/jquery/jquery.min.js"></script>
  <script src="./resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->
  <script src="./resources/vendor/jquery-easing/jquery.easing.min.js"></script>
  <!-- angular js -->
  <script src="./resources/vendor/angular/angular.min.js"></script>
  <script src="./resources/angular/app.js"></script>
  <script src="./resources/angular/service/common_service.js"></script>
  <script src="./resources/angular/controller/common_controller.js"></script>
  
  <script>

  function login(){
	  $('#loginForm').submit();
  }
  </script>

</body>

</html>