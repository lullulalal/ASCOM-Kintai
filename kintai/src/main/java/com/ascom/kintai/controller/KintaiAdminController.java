package com.ascom.kintai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class KintaiAdminController {

	@RequestMapping(value="/adminDay", method=RequestMethod.GET)
	public String adminDay(){
		
		return "admin/admin_day";
	}
	
	@RequestMapping(value="/adminMonth", method=RequestMethod.GET)
	public String adminMonth(){
		
		return "admin/admin_month";
	}
	
	@RequestMapping(value="/adminPerson", method=RequestMethod.GET)
	public String adminPerson(){
		
		return "admin/admin_person";
	}
}
