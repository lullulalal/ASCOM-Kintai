package com.ascom.kintai.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.dao.KintaiCommonDAO;
import com.ascom.kintai.mapper.KintaiCommonMapper;
import com.ascom.kintai.util.KintaiConstant;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappUser;


@Repository
public class KintaiCommonService {
	@Autowired
	KintaiCommonDAO dao;
	
	public Map getText(AppSet appSet, String code){
		String lang = null;
		
		if(appSet == null)
			lang = KintaiConstant.DEFAULT_LANGUAGE;
		else
			lang = appSet.getLanguage();
		
		String text = dao.getText(lang, code);
		
		HashMap<String, String> rtn = new HashMap<>();
		
		rtn.put(code, text);
		
		return rtn;
	}
	
	public boolean login(String email, String pwd, String autoLogin){
		String gotPwd = dao.getPassword(email);
		
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		return passwordEncoder.matches(pwd, gotPwd);
	}
	
	public AppSet getAppSetting(String email){
		AppSet appset = dao.getAppSetting(email);
		
		return appset;
	}
	
    public void keepLogin(String email, String sessionId, Date sessionLimit){
        
        dao.keepLogin(email, sessionId, sessionLimit);  
    }

    public WorkappUser checkUserWithSessionKey(String sessionId){
     
        return dao.checkUserWithSessionKey(sessionId);
    }
}