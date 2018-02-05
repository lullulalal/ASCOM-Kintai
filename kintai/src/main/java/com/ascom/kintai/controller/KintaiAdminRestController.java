package com.ascom.kintai.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ascom.kintai.service.KintaiAdminService;
import com.ascom.kintai.vo.WorkappInfo;

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
	
	@ResponseBody
	@RequestMapping(value = "/getWorkInfoByMonth", method = RequestMethod.POST)
	public List getWorkInfoByMonth(String month, String state) {
		List rtn = service.getWorkInfoByMonth(month, state);
		return rtn;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getWorkInfoByMonthDetail", method = RequestMethod.POST)
	public List getWorkInfoByMonthDetail(String month , String email) {

		List rtn = service.getWorkInfoByMonthDetail(month, email);
		return rtn;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getEmployees", method = RequestMethod.POST)
	public List getEmployees() {

		List rtn = service.getEmployees();
		return rtn;
	}
	
	@ResponseBody
	@RequestMapping(value = "/getWorkInfoByYear", method = RequestMethod.POST)
	public List getWorkInfoByYear(String email, String year) {

		List rtn = service.getWorkInfoByYear(email, year);
		return rtn;
	}
	
}
