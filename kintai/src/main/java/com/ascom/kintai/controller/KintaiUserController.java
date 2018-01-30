package com.ascom.kintai.controller;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.dao.KintaiDao;
import com.ascom.kintai.vo.WorkappInfo;

@Controller
public class KintaiUserController {
	private static final Logger logger = LoggerFactory.getLogger(KintaiUserController.class);

	@Autowired
	KintaiDao dao;
	
	
	@RequestMapping(value="/workappInfoPage", method=RequestMethod.GET)
	public String WorkappInfoPage(){
		
		return "user_list";
	}
	
	@RequestMapping(value="/appSetting", method=RequestMethod.GET)
	public String userAppSetting(){
		
		return "user_app_setting";
	}

	
	@RequestMapping(value = "shukinCheck", method = RequestMethod.GET)
	public String shukin(HttpSession session,Model model) {		
		//String email=(String) session.getAttribute("email");
		String email="lullulalal@gmail.com";

		if(dao.vacationCheck(email)==0){
			model.addAttribute("vacationCheck", "false");
			if(dao.shukinCheck(email)==0) {
				model.addAttribute("shukinCheck", "false");
				return "user_shukin";
			}else{
				model.addAttribute("shukinCheck", "true");
				return "user_taikin";
			}
		}else {
			model.addAttribute("vacationCheck", "true");
			return "user_shukin";
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "shukinInsert", method = RequestMethod.POST)
	public int shukinInsert(String workDate, String startTime, HttpSession session) {
		int resultShukin=0;
		//String email=(String) session.getAttribute("email");
		String email="lullulalal@gmail.com";
		
		WorkappInfo workappinfo=new WorkappInfo(email, workDate, startTime,"","","","", "", "", "");
		
		System.out.println(email+"/"+workDate+"/"+startTime);
		resultShukin=dao.shukinInsert(workappinfo);
		
		return resultShukin;	
	}
	
	@ResponseBody
	@RequestMapping(value = "taikinInsert", method = RequestMethod.POST)
	public int taikinInsert(String endTime, String restTime, HttpSession session) {
		int resultTaikin=0;
		
		//String email=(String) session.getAttribute("email");
		String email="lullulalal@gmail.com";
		
		System.out.println(endTime);
		System.out.println(restTime);
		
		WorkappInfo workappinfo=new WorkappInfo(email, "", "",endTime,restTime,"","", "", "", "");
		
		resultTaikin=dao.taikinInsert(workappinfo);
		
		if(resultTaikin==1) {
			dao.worktimeInsert(email);
		}
		
		return resultTaikin;	
	}
	
	@ResponseBody
	@RequestMapping(value = "vacationInsert", method = RequestMethod.POST)
	public int vacationInsert(String email) {
		int resultVacation=0;
				
		resultVacation=dao.vacationInsert(email);
		
		return resultVacation;	
	}
}
