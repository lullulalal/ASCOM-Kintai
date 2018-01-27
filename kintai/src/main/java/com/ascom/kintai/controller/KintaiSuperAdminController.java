package com.ascom.kintai.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class KintaiSuperAdminController {
	
	@RequestMapping(value = "superSetting", method = RequestMethod.GET)
	public String home() {
		return "super/super_app_setting";
	}
}
