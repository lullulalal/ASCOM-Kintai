package com.ascom.kintai.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
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
	
}
