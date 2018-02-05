package com.ascom.kintai.controller;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ascom.kintai.service.KintaiUserService;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappInfo;
import com.ascom.kintai.vo.WorkappUser;

@RestController
public class KintaiUserRestController {
	
	@Autowired
	KintaiUserService service;
	
	@ResponseBody
	@RequestMapping(value="workInfo", method = RequestMethod.POST)
	public ArrayList<Object> workInfo(String date, HttpSession session){
		//�션처리�기
		
		WorkappUser account = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		String email = account.getEmail();
		
		ArrayList<Object> AllWorkData = service.workInfo(email, date);

		return AllWorkData;
		
	}

	@ResponseBody
	@RequestMapping(value="UpdateWorkInfo", method = RequestMethod.POST)
	public String UpdateWorkInfo(WorkappInfo updateInfo, HttpSession session){
		String mention;
		//�션처리�기
		WorkappUser account = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		AppSet set = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		String email = account.getEmail();
		
		updateInfo.setEmail(email);
		int result = service.UpdateWorkInfo(updateInfo, set);
		if(result!=0){
			mention="success";
		}else{
			mention="fail";
		}
		return mention;	
	}
	
	@ResponseBody
	@RequestMapping(value = "/getUserAppSetting", method = RequestMethod.POST)
	public Object getUserAppSetting(HttpSession session) {
		return session.getAttribute(KintaiConstant.SESSION_SETTING);
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateUserWorkLocation", method = RequestMethod.POST)
	public void updateUserWorkLocation(AppSet set,  HttpSession session) {
		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		
		service.updateUserAppWorkLocation(set, acc.getEmail());

		AppSet sset = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		sset.setWorkLocation(set.getWorkLocation());
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateUserLanguage", method = RequestMethod.POST)
	public void updateUserAppSetting(AppSet set,  HttpSession session) {
		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		
		service.updateUserAppLanguage(set, acc.getEmail());

		AppSet sset = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		sset.setLanguage(set.getLanguage());
	}
	
	@ResponseBody
	@RequestMapping(value = "/updateUserPassword", method = RequestMethod.POST)
	public void updateUserPassword(String pwd,  HttpSession session) {

		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		
		service.updateUserPassword(pwd, acc.getEmail());
		
	}
	
	@ResponseBody
	@RequestMapping(value = "shukinInsert", method = RequestMethod.POST)
	public int shukinInsert(String workDate, String startTime, HttpSession session) {
		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		AppSet aps = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		return service.shukinInsert(workDate, startTime, acc.getEmail(), aps.getWorkLocation());	
	}
	
	@ResponseBody
	@RequestMapping(value = "taikinInsert", method = RequestMethod.POST)
	public int taikinInsert(String workDate, String endTime, String restTime, HttpSession session) {
		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		AppSet aps = (AppSet)session.getAttribute(KintaiConstant.SESSION_SETTING);
		return service.taikinInsert(workDate, endTime, restTime, acc.getEmail(), aps.getWorkLocation());
	}
	
	@ResponseBody
	@RequestMapping(value = "vacationInsert", method = RequestMethod.POST)
	public int vacationInsert(HttpSession session) {
		WorkappUser acc = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		return service.vacationInsert(acc.getEmail());
	}
	
	@ResponseBody
	@RequestMapping(value = "currentTime", method = RequestMethod.POST)
	public String currentTime() {
		return service.getCurrentTime();
	}
	
	@ResponseBody
	@RequestMapping(value = "getComment", method = RequestMethod.POST,  produces = "application/text; charset=utf8")
	public String getComment() {
		return service.getComment();
	}
	@ResponseBody
	@RequestMapping(value = "currentRestTime", method = RequestMethod.POST,  produces = "application/text; charset=utf8")
	public String currentRestTime(HttpSession session) {
		WorkappUser account = (WorkappUser)session.getAttribute(KintaiConstant.SESSION_LOGIN_ACCOUNT);
		String email = account.getEmail();
		
		return service.currentRestTime(email);
	}
}
