package com.ascom.kintai.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiSuperAdminService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.WorkappUser;

@Controller
public class KintaiSuperAdminRestController {
	
	@Autowired
	KintaiSuperAdminService service;
	
	@ResponseBody
	@RequestMapping(value = "/getSuperAdminSetting", method = RequestMethod.POST)
	public Map getSuperAdminSetting() {

		return service.getSuperAdminSetting();
	}

	@ResponseBody
	@RequestMapping(value = "/updateSuperAdminSetting", method = RequestMethod.POST)
	public void updateSuperAdminSetting(@RequestParam Map<String, String> set) {
		service.updateSuperAdminSetting(set);
	}
	
	@ResponseBody
	@RequestMapping(value = "/insertEmployee", method = RequestMethod.POST)
	public void insertEmployee(@RequestParam Map<String, String> info) {
		
		//info.forEach((k, v) -> System.out.println("Key : " + k + " Value : " + v));	
		
		service.insertEmployee(info);
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
	public void updateEmployee(@RequestParam Map<String, String> info) {
		service.updateEmployee(info);
	}
//	
//	@ResponseBody
//	@RequestMapping(value = "/deleteEmployee", method = RequestMethod.POST)
//	public void insertEmployee(@RequestParam Map<String, String> info) {
//		service.updateSuperAdminSetting(set);
//	}
}
