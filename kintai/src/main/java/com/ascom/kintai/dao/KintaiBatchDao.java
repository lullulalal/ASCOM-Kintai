package com.ascom.kintai.dao;

import java.util.ArrayList;
import java.util.Calendar;

import org.apache.ibatis.session.SqlSession;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.KintaiBatchMapper;
import com.ascom.kintai.mapper.KintaiUserMapper;
import com.ascom.kintai.vo.Employee;

@Repository
public class KintaiBatchDao implements Job{

	private SqlSession sqlSession;
	
	@Override
	public void execute(JobExecutionContext arg0) throws JobExecutionException {
		ApplicationContext ctx = (ApplicationContext)arg0.getJobDetail().getJobDataMap().get("applicationContext"); 
		sqlSession = (SqlSession)ctx.getBean("sqlSession");
		
		KintaiBatchMapper bMapper = sqlSession.getMapper(KintaiBatchMapper.class);
		
		ArrayList<Employee> employees = (ArrayList<Employee>) bMapper.getWorkedInfoToday();
		
		KintaiUserMapper Wmapper = sqlSession.getMapper(KintaiUserMapper.class);
		 Calendar cal = Calendar.getInstance(); 
		 int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK); 
		 
		for(Employee e : employees) {
			Wmapper.vacationInsert(e.getEmail(), dayOfWeek);
		}
	}

}
