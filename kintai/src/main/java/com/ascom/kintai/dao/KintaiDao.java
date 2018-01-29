package com.ascom.kintai.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class KintaiDao {

	@Autowired
	SqlSession sqlSession;
	
	public int shukinCheck(String email) {
		int checkResult = 0;

		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		checkResult = mapper.shukinCheck(email);

		return checkResult;
	}
	
	public int shukinInsert(WorkappInfo workappinfo) {
		int insertResult = 0;
		
		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		insertResult=mapper.shukinInsert(workappinfo);
		
		return insertResult;
		
	}
	
	public int taikinInsert(WorkappInfo workappinfo) {
		int insertResult = 0;
		
		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		insertResult=mapper.taikinInsert(workappinfo);
		
		return insertResult;
		
	}
	
	public int worktimeInsert(String email) {
		int insertResult = 0;
		
		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		insertResult=mapper.worktimeInsert(email);
		
		return insertResult;
	}
	
	public int vacationInsert(String email) {
		int insertResult=0;
		
		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		insertResult=mapper.vacationInsert(email);
		
		return insertResult;
	}
	
	public int vacationCheck(String email) {
		int checkResult = 0;

		KintaiMapper mapper = sqlSession.getMapper(KintaiMapper.class);
		checkResult = mapper.vacationCheck(email);

		return checkResult;
	}
}
