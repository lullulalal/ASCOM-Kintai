package com.ascom.kintai.dao;

import java.util.ArrayList;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.type.TimeOnlyTypeHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.mapper.WorkappInfoMapper;
import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class WorkappInfoDao extends TimeOnlyTypeHandler{
	
	@Autowired
	private SqlSession sqlsession;

	public ArrayList<Object> workInfo(String email,String date){
		WorkappInfoMapper Wmapper = sqlsession.getMapper(WorkappInfoMapper.class);

		ArrayList<Object> AllWorkData = new ArrayList<>();
		ArrayList<WorkappInfo> workList = new ArrayList<>();
		String AllWorkTime;
		
		workList = Wmapper.workInfo(email,date);
		AllWorkTime= Wmapper.AllWorkTime(email, date);

		AllWorkData.add(0, workList);
		AllWorkData.add(1, AllWorkTime);

		
		return AllWorkData;
	}
	
	public int UpdateWorkInfo(WorkappInfo updateInfo){
		WorkappInfoMapper Wmapper = sqlsession.getMapper(WorkappInfoMapper.class);
		System.out.println("????"+updateInfo.getWorkDate());
		int result = Wmapper.UpdateWorkInfo(updateInfo);
		return result;
		
	}
}
