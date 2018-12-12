package com.ascom.kintai.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.KintaiSuperAdminMapper;

@Repository
public class KintaiSuperAdminDAO {

	@Autowired
	SqlSession sqlSession;
	
	public Map getSuperAdminSetting(){		
		
		KintaiSuperAdminMapper mapper = sqlSession.getMapper(KintaiSuperAdminMapper.class);

		return mapper.getSuperAdminSetting();
	}
	
	public void updateSuperAdminSetting(Map set){		
		
		KintaiSuperAdminMapper mapper = sqlSession.getMapper(KintaiSuperAdminMapper.class);

	    mapper.updateMaxTimeSuperAdminSet(set);
		mapper.updateMinTimeSuperAdminSet(set);
		mapper.updateNoticeSuperAdminSet(set);

	}
	
	public void insertEmployee(Map info){		
		
		KintaiSuperAdminMapper mapper = sqlSession.getMapper(KintaiSuperAdminMapper.class);

	    mapper.insertToEmployeeTable(info);
	    
		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPwd = passwordEncoder.encode((String)info.get("password"));
		info.put("password", hashedPwd);
		
		mapper.insertToAppAcountTable(info);
		mapper.insertToAppSetAuth(info);
		mapper.insertToAppSetWorkLocation(info);
		mapper.insertToAppSetLanguage(info);

	}	
	
	public void updateEmployee(Map info){		
		
		KintaiSuperAdminMapper mapper = sqlSession.getMapper(KintaiSuperAdminMapper.class);

	    mapper.updateToEmployeeTable(info);
		mapper.updateToAppSetAuth(info);
		
		if( !("".equals((String)info.get("password"))) ) {
			PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			String hashedPwd = passwordEncoder.encode((String)info.get("password"));
			info.put("password", hashedPwd);
			
			mapper.updateToAppAcountTable(info);
		}
	}	
}
