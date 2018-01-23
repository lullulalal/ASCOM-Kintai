package com.ascom.kintai.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.TestMapper;
import com.ascom.kintai.vo.TestVo;


@Repository
public class TestDao {
	
	@Autowired
	SqlSession sqlSession;
	
	public void insert(TestVo TestVo){		
		TestMapper mapper = sqlSession.getMapper(TestMapper.class);
		 mapper.insert(TestVo);
	}
}
