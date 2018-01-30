package com.ascom.kintai.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiAdminService;

@Controller
public class KintaiAdminRestController {
	@Autowired
	KintaiAdminService service;
	
	@ResponseBody
	@RequestMapping(value = "/getWorkInfoByDay", method = RequestMethod.POST)
	public Map getWorkInfoByDay(String date, String state) {
		Map rtn = service.getWorkInfoByDay(date, state);
		 return rtn;
	}
}
