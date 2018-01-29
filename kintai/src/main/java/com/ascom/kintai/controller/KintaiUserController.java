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

import com.ascom.kintai.dao.KintaiUserDao;
import com.ascom.kintai.service.KintaiUserService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.WorkappInfo;
import com.ascom.kintai.vo.WorkappUser;

@Controller
public class KintaiUserController {
	private static final Logger logger = LoggerFactory.getLogger(KintaiUserController.class);

	@Autowired
	KintaiUserDao dao;
	
	
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
		WorkappUser account = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		String email = account.getEmail();

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
}
