package com.ascom.kintai.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiSuperAdminService;

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
}
