package com.ascom.kintai.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.KintaiAdminMapper;

@Repository
public class KintaiAdminDAO {

	@Autowired
	SqlSession sqlSession;
	
	public List getWorkInfoByDay(String date, String state) {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		return  mapper.getWorkInfoByDay(date, state);
	}
}
