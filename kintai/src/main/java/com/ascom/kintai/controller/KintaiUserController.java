package com.ascom.kintai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class KintaiUserController {

	@RequestMapping(value="/workappInfoPage", method=RequestMethod.GET)
	public String WorkappInfoPage(){
		
		return "user_list";
	}
	
	@RequestMapping(value="/workappInfoPage2", method=RequestMethod.GET)
	public String WorkappInfoPage2(){
		
		return "user_taikin";
	}
}
