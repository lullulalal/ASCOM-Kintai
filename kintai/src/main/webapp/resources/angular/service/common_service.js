'use strict';

app.factory('comnService',  function(){
	
	function getText(code){
		var text = null;
		
		$.ajax({
			url:'getText',
			data: {'code' : code},   
			type: 'post',             
			async: false,
			success: function(response) { 
				text = response[code];
			}
		});
		return text;
	}
	
	function getMenu(){
		var menu = null;
		
		$.ajax({
			url:'getAuth', 
			type: 'post',             
			async: false,
			success: function(response) { 
				var auth = response["auth"];
				if(auth == '0')
					menu = superAdminMenu;
				else if(auth == '1')
					menu = adminMenu;
				else if(auth == '2')
					menu = userMenu;
			}
		});
		
		return menu;
	}
	
	function commonModal(modalObj) {
	    modal({
	        type: modalObj['type'],
	        title: modalObj['title'],
	        text: modalObj['text'],
			buttons: modalObj['buttons']
	    }); 
	}
	
	 return {
		 getText : getText,
		 getMenu : getMenu,
		 commonModal : commonModal
	 }

});

var superAdminMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
						'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
							 '<a class="nav-link nav-link-collapse collapsed" href="superSetting">' +
							 	'<i class="fa fa-fw fa-wrench"></i>' +
							 	'<span class="nav-link-text"><span class="0007"></span></span>' +
							 '</a>' +
						 '</li>'+
						'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
							'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
								'<i class="fa fa-fw fa-wrench"></i>'+
								'<span class="nav-link-text"><span class="0042"></span></span>'+
							'</a>'+
						'</li>'+
					'</ul>'+
					'<ul class="navbar-nav sidenav-toggler">'+
						'<li class="nav-item">'+
							'<a class="nav-link text-center" id="sidenavToggler">'+
								'<i class="fa fa-fw fa-angle-left"></i>'+
							'</a>'+
						'</li>'+
					'</ul>'+
					'<ul class="navbar-nav ml-auto">'+
						'<li class="nav-item">'+
							'<a class="nav-link" data-toggle="modal" data-target="#logoutModal">'+
								'<i class="fa fa-fw fa-sign-out"></i><span class="0021"></span></a>'+
						'</li>'+
					'</ul>';

var adminMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
						 '<a class="nav-link nav-link-collapse collapsed" href="shukinCheck">' +
						 	'<i class="fa fa-fw fa-calendar-check-o"></i>' +
						 	'<span class="nav-link-text"><span class="0046"></span></span>' +
						 '</a>' +
					 '</li>'+
					 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
					 	  '<a class="nav-link nav-link-collapse collapsed" href="workappInfoPage">'+
					 	  	'<i class="fa fa-fw fa-table"></i>'+
							'<span class="nav-link-text"><span class="0013"></span></span>'+
						  '</a>'+
				     '</li>'+
				 	 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						 '<a class="nav-link nav-link-collapse collapsed" href="#">'+
						 	'<i class="fa fa-fw fa-calendar-o"></i>'+
						 	'<span class="nav-link-text"><span class="0034"></span></span>'+
					 	 '</a>'+
					 '</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="#">'+
							'<i class="fa fa-fw fa-calendar-o"></i>'+
							'<span class="nav-link-text"><span class="0035"></span></span>'+
						'</a>'+
					'</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="#">'+
							'<i class="fa fa-fw fa-calendar-o"></i>'+
							'<span class="nav-link-text"><span class="0036"></span></span>'+
						'</a>'+
					'</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
							'<i class="fa fa-fw fa-wrench"></i>'+
							'<span class="nav-link-text"><span class="0042"></span></span>'+
						'</a>'+
					'</li>'+
				'</ul>'+
				'<ul class="navbar-nav sidenav-toggler">'+
				'<li class="nav-item">'+
					'<a class="nav-link text-center" id="sidenavToggler">'+
						'<i class="fa fa-fw fa-angle-left"></i>'+
					'</a>'+
				'</li>'+
				'</ul>'+
				'<ul class="navbar-nav ml-auto">'+
					'<li class="nav-item">'+
						'<a class="nav-link" data-toggle="modal" data-target="#logoutModal">'+
							'<i class="fa fa-fw fa-sign-out"></i><span class="0021"></span></a>'+
					'</li>'+
				'</ul>';

var userMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
						 '<a class="nav-link nav-link-collapse collapsed" href="shukinCheck">' +
						 	'<i class="fa fa-fw fa-calendar-check-o"></i>' +
						 	'<span class="nav-link-text"><span class="0046"></span></span>' +
						 '</a>' +
					 '</li>'+
					 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
					 	  '<a class="nav-link nav-link-collapse collapsed" href="workappInfoPage">'+
					 	  	'<i class="fa fa-fw fa-table"></i>'+
							'<span class="nav-link-text"><span class="0013"></span></span>'+
						  '</a>'+
					 '</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
							'<i class="fa fa-fw fa-wrench"></i>'+
							'<span class="nav-link-text"><span class="0042"></span></span>'+
						'</a>'+
					'</li>'+
				'</ul>'+
				'<ul class="navbar-nav sidenav-toggler">'+
					'<li class="nav-item">'+
						'<a class="nav-link text-center" id="sidenavToggler">'+
							'<i class="fa fa-fw fa-angle-left"></i>'+
						'</a>'+
					'</li>'+
				'</ul>'+
				'<ul class="navbar-nav ml-auto">'+
					'<li class="nav-item">'+
						'<a class="nav-link" data-toggle="modal" data-target="#logoutModal">'+
							'<i class="fa fa-fw fa-sign-out"></i><span class="0021"></span></a>'+
					'</li>'+
				'</ul>';
