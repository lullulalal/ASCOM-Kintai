package com.ascom.kintai.dao;

import java.util.Date;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.KintaiCommonMapper;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappUser;

@Repository
public class KintaiCommonDAO {
	
	@Autowired
	SqlSession sqlSession;
	
	public String getText(String lang, String code){		
		
		KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
		String text = mapper.getText(lang, code);
		 
		return text;
	}
	
	public String getPassword(String email) {
		
		KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
		String password = mapper.getPassword(email);
		
		return password;
	}
	
	public AppSet getAppSetting(String email) {
		KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
		AppSet setting  = mapper.getAppSetting(email);
		
		return setting;
	}
	
    public void keepLogin(String email, String sessionId, Date sessionLimit){
        
        WorkappUser workappUser = new WorkappUser(email, sessionId, sessionLimit);
        
        KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
        mapper.keepLogin(workappUser);      
    }

    public WorkappUser checkUserWithSessionKey(String sessionId){
    	
		KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
		WorkappUser workappUser  = mapper.checkUserWithSessionKey(sessionId);
     
        return workappUser;
    }

}