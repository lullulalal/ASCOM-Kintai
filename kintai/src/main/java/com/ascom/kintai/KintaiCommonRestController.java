package com.ascom.kintai;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiCommonService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.AppSet;

@Controller
public class KintaiCommonRestController {
	
	@Autowired
	KintaiCommonService service;
	
	@ResponseBody
	@RequestMapping(value = "/getText", method = RequestMethod.POST)
	public Map getText(String code, HttpSession session) {
		AppSet appSet = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		
		return service.getText(appSet, code);
	}
	
	@ResponseBody
	@RequestMapping(value = "/getAuth", method = RequestMethod.POST)
	public Map getAuth(String code, HttpSession session) {
		AppSet appSet = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		
		HashMap<String, Integer> auth = new HashMap<>();
		auth.put("auth", appSet.getAuthority());
		return auth;
	}

}
