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
	
	public List getWorkInfoByMonthDetail(String month, String email, String minTime, String maxTime) {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		System.out.println(month);
		System.out.println(email);
		System.out.println(minTime);
		System.out.println(maxTime);
		return  mapper.getWorkInfoByMonthDetail(month, email, minTime, maxTime);
	}
	
	public List getWorkInfoByDay(String date, String state) {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		return  mapper.getWorkInfoByDay(date, state);
	}
	
	public List getWorkInfoByMonth(String month, String minTime, String maxTime) {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		return  mapper.getWorkInfoByMonth(month, minTime, maxTime);
	}
	
	public List getEmployees() {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		return  mapper.getEmployees();
	}
	
	public List getWorkInfoByYear(String email, String year, String minTime, String maxTime) {
		KintaiAdminMapper mapper = sqlSession.getMapper(KintaiAdminMapper.class);
		return  mapper.getWorkInfoByYear(email, year, minTime, maxTime);		
	}
	
}
