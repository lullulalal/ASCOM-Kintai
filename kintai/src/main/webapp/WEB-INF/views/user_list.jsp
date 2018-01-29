<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
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
  <!-- Page level plugin CSS-->
  <link href="./resources/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="./resources/css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top" ng-app="ascomApp" ng-controller="comnCtrl">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.html"><img class="banner_top" src="./resources/img/logo_banner.png">ASCOM</a> 
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.html">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a class="nav-link" href="charts.html">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Charts</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link" href="tables.html">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Tables</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Components</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents">
            <li>
              <a href="navbar.html">Navbar</a>
            </li>
            <li>
              <a href="cards.html">Cards</a>
            </li>
          </ul>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-link"></i>
            <span class="nav-link-text">Link</span>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper-white">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb3">
        <li>{{::getText('0022')}}</li>
      </ol>
      <!-- Example DataTables Card-->
      <div class="card mb-3">
        <div class="card-header">
          <input type="month" ng-model="workInfo" class="searchTime"><button type="button" id="searchInfo">{{::getText('0025')}}</button></div>
        <div class="card-body2">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>{{::getText('0023')}}</th>
                  <th>{{::getText('0011')}}</th>
                  <th>{{::getText('0016')}}</th>
                  <th>{{::getText('0017')}}</th>
                  <th>{{::getText('0027')}}</th>
                  <th>{{::getText('0041')}}</th>
                </tr>
              </thead>
              <tbody class="WorkInfoTable">

              </tbody>
            </table>
            <div>
            	<table class="bottom_table">
            	 <thead>
                 <tr>
                  <th>{{::getText('0026')}}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
              	  <td id="AllWorkTime">&nbsp;</td>
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
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
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
  	
    <!-- modal -->
    <link href="./resources/css/jquery.modal.css" rel="stylesheet">
    <link href="./resources/css/jquery.modal.theme-atlant.css" rel="stylesheet">
    <link href="./resources/css/jquery.modal.theme-xenon.css" rel="stylesheet">   
    <script src="./resources/js/jquery.modal.js"></script>
    
    <script>
    
    
    $(function(){
    	
    	var date = NowDate();
	        	
    	GetWorkInfoList(date);
    	
    	$("#searchInfo").click(function(){
    		InputDate();
    	});
    	
    });
    
    	
    //今月の勤務表をもらうため現在の時間を型変換してインプットボックスに入れる機能
	function NowDate(){
		
	    d = new Date(),
        month = '' + (d.getMonth() + 1),
        year = d.getFullYear();
	    if (month.length < 2) month = '0' + month;
	    
	    date = [year, month].join('-');
	    
	    $('.searchTime').val(date);
	    
	    return date;
	    
	}
	
    function InputDate(){
    	
    	date = $('.searchTime').val();

		GetWorkInfoList(date);
    }
    
	//入れた変数の勤務表をもらう機能
    function GetWorkInfoList(date){

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
						
						workInfoList += '<tr><td>'+item.workDate+'</td><td>'+item.startTime
									 	+'</td><td>'+item.endTime+'</td><td>'+item.restTime
									 	+'</td><td>'+item.workTime+'</td><td><button date=\"'
								  		+item.workDate+'\" class=\"update_btn\">ok</button></td></tr>';
					});	
					$('#AllWorkTime').text(data[1]);
				}
				$('.WorkInfoTable').html(workInfoList);
				
		  		UpdateInfo();
			}
		}); 
  		
    }
    
    
	//修正ボタンを押せば該当する修正したい日の情報をデータベースでもらう機能
    function UpdateInfo(){
    	
    	$('.update_btn').click(function(){

    		var UpDate = $(this).attr("date");

    		ym = $('.searchTime').val();
    		Udate = [ym, UpDate].join('-');


    		$.ajax({
    			type:"post",
    			url:"workInfo",
    			data:{
    				date:Udate
    			},
    			success:function(data){
    				UpdateBox(data[0]);	
    			}
    		});
    	});
    }
    
    
 	//データベースでもらった情報をアラートで見える機能
	 function UpdateBox(workInfo){
		 
		 var updateInfo;
 			$.each(workInfo,function(index,item){
				updateInfo = '<table class=\"table table-bordered\"><tr><td>'+item.workDate
							 +'</td><td><input type=\"time\" id=\"UstartTime\" value=\"'
							 +item.startTime+'\"></td><td><input type=\"time\" id=\"UendTime\" value=\"'
							 +item.endTime+'\"></td><td><input type=\"text\" id=\"UrestTime\" value=\"'
							 +item.restTime+'\"></td></tr></table>';
			}); 
		 		  
		    modal({
		        type: 'success',
		        title: '日時修正',
		        text: updateInfo,
				buttons: [{
					text: 'OK', 
					val: 'ok', 
					eKey: true,
					addClass: 'btn-orange btn-square', 
					onClick: function() {
						UpdateWorkInfo();
						return true;
					}
				}, ]
		    }); 

		}
	 
	 
/* 	 //アラートで情報を修正する機能
	 function UpdateWorkInfo(){
		 
		 var UstartTime = $('#UstartTime').val();
		 var UendTime = $('#UendTime').val();
		 var UrestTime = $('#UrestTime').val();

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
					 InputDate();
				 }else{
					return false;
				 }
			 }
		 });  
	 } */
	 
	 //アラートで情報を修正する機能
	 function UpdateWorkInfo(){
		 
		 var UstartTime = $('#UstartTime').val();
		 var UendTime = $('#UendTime').val();
		 var UrestTime = $('#UrestTime').val();

  		 $.ajax({
			 type:'post',
			 url:'UpdateWorkInfo',
			 data:{
				 workDate:Udate,
				 startTime:UstartTime,
				 endTime:UendTime,
				 restTime:UrestTime
			 },
			 success:function(data){
				 if(data==="success"){
					 InputDate();
				 }else{
					return false;
				 }
			 }
		 });  
	 }
	 

	</script>
 

  </div>
</body>

</html>