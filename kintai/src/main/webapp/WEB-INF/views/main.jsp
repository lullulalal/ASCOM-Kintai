<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>SB Admin - Start Bootstrap Template</title>
  <!-- Bootstrap core CSS-->
  <link href="./resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="./resources/vendor/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css">
  <!-- Custom styles for this template-->
  <link href="./resources/css/sb-admin.css" rel="stylesheet">
</head>

<body class="bg-dark">
  <div class="container">
    <div class="main_logo">
  	 <div class="main_logo_inner">
	   <img class="main_logo_top" src="./resources/img/logo_top.png">
  	   <img class="main_logo_bottom" src="./resources/img/logo_bottom.png">
   	 </div>
   	 
   	 <img class="main_logo_txt" src="./resources/img/logo_txt.png">
  	</div>
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">LOGIN</div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">社員ID</label>
            <input class="form-control" type="text" ng-model="user_id">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">パスワード</label>
            <input class="form-control" type="password">
          </div>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox"> Remember Password</label>
            </div>
          </div>
          <a class="btn btn-primary btn-block">Login</a>
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
  
</body>

</html>