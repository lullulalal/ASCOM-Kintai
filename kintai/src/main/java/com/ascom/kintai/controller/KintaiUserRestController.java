package com.ascom.kintai.controller;

import java.util.ArrayList;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ascom.kintai.dao.WorkappInfoDao;
import com.ascom.kintai.vo.WorkappInfo;

@RestController
public class KintaiUserRestController {
	
	@Autowired
	WorkappInfoDao wdao;
	
	@ResponseBody
	@RequestMapping(value="workInfo", method = RequestMethod.POST)
	public ArrayList<Object> workInfo(String date,HttpSession session){
		//세션처리하기
		System.out.println(date);
		String email = "park.siwon@a-s.com.co";
		ArrayList<Object> AllWorkData = wdao.workInfo(email, date);

		return AllWorkData;
		
	}

	@ResponseBody
	@RequestMapping(value="UpdateWorkInfo", method = RequestMethod.POST)
	public String UpdateWorkInfo(WorkappInfo updateInfo){
		String mention;
		//세션처리하기
		String email = "park.siwon@a-s.com.co";
		updateInfo.setEmail(email);
		int result = wdao.UpdateWorkInfo(updateInfo);
		if(result!=0){
			mention="success";
		}else{
			mention="fail";
		}
		return mention;	
	}
	

}
