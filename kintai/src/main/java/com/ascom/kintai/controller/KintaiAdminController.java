package com.ascom.kintai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ascom.kintai.vo.WorkappInfo;

@Controller
public class KintaiAdminController {

	@RequestMapping(value="/adminDay", method=RequestMethod.GET)
	public String adminDay(){
		
		return "admin/admin_day";
	}
	
	@RequestMapping(value="/adminMonth", method=RequestMethod.GET)
	public String adminMonth(WorkappInfo wai, Model model){
		model.addAttribute("workappInfo", wai);
		System.out.println(wai.toString());
		return "admin/admin_month";
	}
	
	@RequestMapping(value="/adminPerson", method=RequestMethod.GET)
	public String adminPerson(String keyword, Model model){
		if (keyword == null) keyword = "";
		model.addAttribute("keyword", keyword);
		return "admin/admin_person";
	}
	
	@RequestMapping(value="/adminPersonYear", method=RequestMethod.GET)
	public String adminPersonYear(WorkappInfo wai, String year, Model model){
		model.addAttribute("workappInfo", wai);
		model.addAttribute("year", year);
		
		return "admin/admin_person_year";
	}
	
	@RequestMapping(value="/adminMonthDetail", method=RequestMethod.GET)
	public String adminMonthDetail(WorkappInfo wai, String prePage,  Model model){
		model.addAttribute("workappInfo", wai);
		model.addAttribute("prePage", prePage);
		return "admin/admin_month_detail";
	}
}
