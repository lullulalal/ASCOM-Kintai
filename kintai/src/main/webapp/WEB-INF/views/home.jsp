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
      <div class="card-header">{{::getText('0006')}}</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">{{::getText('0001')}}</label>
            <input class="form-control" type="text" ng-model="user_id">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">{{::getText('0003')}}</label>
            <input class="form-control" type="password">
          </div>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"> {{::getText('0005')}}</label>
            </div>
          </div>
          <a class="btn btn-primary btn-block">{{::getText('0006')}}</a>
        </form>
      </div>
    </div>
  </div>
  
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

</body>

</html>