package com.ascom.kintai.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.KintaiCommonMapper;

@Repository
public class KintaiCommonDAO {
	
	@Autowired
	SqlSession sqlSession;
	
	public String getText(String lang, String code){		
		
		KintaiCommonMapper mapper = sqlSession.getMapper(KintaiCommonMapper.class);
		String text = mapper.getText(lang, code);
		 
		return text;
	}
}
