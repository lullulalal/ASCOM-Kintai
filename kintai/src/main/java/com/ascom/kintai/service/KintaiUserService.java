package com.ascom.kintai.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.dao.KintaiUserDao;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class KintaiUserService {

	@Autowired
	KintaiUserDao wdao;
	
	public ArrayList<Object> workInfo(String email, String date){
		ArrayList<Object> AllWorkData = wdao.workInfo(email, date);

		return AllWorkData;
	}
	
	public int UpdateWorkInfo(WorkappInfo updateInfo){

		int result = wdao.UpdateWorkInfo(updateInfo);

		return result;	
	}
	
	public void updateUserAppSetting(AppSet set, String email) {
		
		wdao.updateUserAppSetting(set, email);
	}
	
	public void updateUserPassword(String pwd, String email) {
		
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPwd = passwordEncoder.encode(pwd);
		
		wdao.updateUserPassword(hashedPwd, email);
	}
	
	
}
