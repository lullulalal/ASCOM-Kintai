'use strict';

app.factory('comnService',  function(){
	
	function getText(code){
		var text;
		
		var rstHandle= function(response){
			text = response[code];
			var cls = '.' + code;
			$(cls).html(response[code]);
		};

		$.ajax({
			url:'getText',
			data: {'code' : code},   
			type: 'post',             
			success: rstHandle
		});
	
		return text;	
	}
	
	function getText2(code, rstHandle ){
		
		var success= function(response){
			rstHandle(response[code]);
		};
		$.ajax({
			url:'getText',
			data: {'code' : code},   
			type: 'post',             
			success: success
		});
	
	}
	
	function printMenuRec(codeArray, index, menu){
		if(codeArray.length == index) {
			$('#navbarResponsive').html(menu); 
			return;
		}
		
		var func = function(text){
			var newMenu = menu.replace(codeArray[index], text);
			printMenuRec(codeArray, ++index, newMenu);
		};
		
		getText2(codeArray[index],func);
	}
	
	function getMenu(){
		
		if( $('#navbarResponsive').html() == '') {
			$.ajax({
				url:'getAuth', 
				type: 'post',             
				//async: false,
				success: function(response) { 
					var auth = response["auth"];
		
					if(auth == '0') {
						var code = ['0007', '0042', '0021'];
						printMenuRec(code, 0, superAdminMenu);
					}
					else if(auth == '1'){
						var code = ['0046', '0013', '0034', '0035', '0036', '0042', '0021'];
						printMenuRec(code, 0, adminMenu);
					}
					else if(auth == '2'){    
						var code = ['0046', '0013', '0042', '0021'];
						printMenuRec(code, 0, userMenu);
					}
				}
			});
		}
	}
	
	function commonModal(titleCode, textCode, btnTextCode, btnHandler, rstHandler) {
		var modaltitle = '';
		var modalText = '';
		var modalBtnText = '';
		
		if(btnHandler == null){
			btnHandler = function() {
				return true;
			};
		}
		
		getText2(titleCode, function(text) {
			if(text == null) modaltitle = titleCode;
			else modaltitle = text;
			
			getText2(textCode, function(text){
				if(text == null) modalText = textCode;
				else modalText = text;
				  
					getText2(btnTextCode, function(text){
						
						if(text == null) modalBtnText = btnTextCode;
						else modalBtnText = text;
						
						var modalObj =  {
						        'type' : 'success',
						        'title' : modaltitle,
						        'text' : modalText,
								'buttons' : [{
									'text': modalBtnText,
									'val': 'ok',
									'eKey' : true,
									'addClass': 'btn-orange btn-square',
									'onClick': btnHandler
								}]
						} 
					    modal({
					        type: modalObj['type'],
					        title: modalObj['title'],
					        text: modalObj['text'],
							buttons: modalObj['buttons']
					    }); 
						
						if(rstHandler != null ) rstHandler();
				   });
			   });
		   });
	}
	
	 return {
		 getText : getText,
		 getMenu : getMenu,
		 getText2 : getText2,
		 commonModal : commonModal
	 }

});

var superAdminMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
						'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
							 '<a class="nav-link nav-link-collapse collapsed" href="superSetting">' +
							 	'<i class="fa fa-fw fa-wrench"></i>' +
							 	'<span class="nav-link-text">0007</span>' +
							 '</a>' +
						 '</li>'+
						'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
							'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
								'<i class="fa fa-fw fa-wrench"></i>'+
								'<span class="nav-link-text">0042</span>'+
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
								'<i class="fa fa-fw fa-sign-out"></i>0021</a>'+
						'</li>'+
					'</ul>';

var adminMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
						 '<a class="nav-link nav-link-collapse collapsed" href="shukinCheck">' +
						 	'<i class="fa fa-fw fa-calendar-check-o"></i>' +
						 	'<span class="nav-link-text">0046</span>' +
						 '</a>' +
					 '</li>'+
					 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
					 	  '<a class="nav-link nav-link-collapse collapsed" href="workappInfoPage">'+
					 	  	'<i class="fa fa-fw fa-table"></i>'+
							'<span class="nav-link-text">0013</span>'+
						  '</a>'+
				     '</li>'+
				 	 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						 '<a class="nav-link nav-link-collapse collapsed" href="adminDay">'+
						 	'<i class="fa fa-fw fa-calendar-o"></i>'+
						 	'<span class="nav-link-text">0034</span>'+
					 	 '</a>'+
					 '</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="adminMonth">'+
							'<i class="fa fa-fw fa-calendar-o"></i>'+
							'<span class="nav-link-text">0035</span>'+
						'</a>'+
					'</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="adminPerson">'+
							'<i class="fa fa-fw fa-calendar-o"></i>'+
							'<span class="nav-link-text">0036</span>'+
						'</a>'+
					'</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
							'<i class="fa fa-fw fa-wrench"></i>'+
							'<span class="nav-link-text">0042</span>'+
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
							'<i class="fa fa-fw fa-sign-out"></i>0021</a>'+
					'</li>'+
				'</ul>';

var userMenu = '<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">' +
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">' +
						 '<a class="nav-link nav-link-collapse collapsed" href="shukinCheck">' +
						 	'<i class="fa fa-fw fa-calendar-check-o"></i>' +
						 	'<span class="nav-link-text">0046</span>' +
						 '</a>' +
					 '</li>'+
					 '<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
					 	  '<a class="nav-link nav-link-collapse collapsed" href="workappInfoPage">'+
					 	  	'<i class="fa fa-fw fa-table"></i>'+
							'<span class="nav-link-text">0013</span>'+
						  '</a>'+
					 '</li>'+
					'<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">'+
						'<a class="nav-link nav-link-collapse collapsed" href="appSetting">'+
							'<i class="fa fa-fw fa-wrench"></i>'+
							'<span class="nav-link-text">0042</span>'+
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
							'<i class="fa fa-fw fa-sign-out"></i>0021</a>'+
					'</li>'+
				'</ul>';
