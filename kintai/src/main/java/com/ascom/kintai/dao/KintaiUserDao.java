package com.ascom.kintai.dao;

import java.util.ArrayList;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.type.TimeOnlyTypeHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;

import com.ascom.kintai.mapper.KintaiUserMapper;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class KintaiUserDao extends TimeOnlyTypeHandler{
	
	@Autowired
	private SqlSession sqlsession;

	public ArrayList<Object> workInfo(String email,String date){
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);

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
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		int result = Wmapper.UpdateWorkInfo(updateInfo);
		return result;
	}
	
	public void updateUserAppWorkLocation(AppSet set, String email) {
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);

		Wmapper.updateUserAppWorkLocation(set.getWorkLocation(), email);
	}
	
	public void updateUserAppLanguage(AppSet set, String email) {
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		
		Wmapper.updateUserAppLanguage(set.getLanguage(), email);
	}
	
	
	public void updateUserPassword(String HashedPwd, String email) {
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		
		Wmapper.updateUserPassword(HashedPwd, email);
	}
	
	public int shukinCheck(String email) {
		int checkResult = 0;

		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		checkResult = Wmapper.shukinCheck(email);

		return checkResult;
	}
	
	public int shukinInsert(WorkappInfo workappinfo) {
		int insertResult = 0;
		
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		insertResult = Wmapper.shukinInsert(workappinfo);
		
		return insertResult;
		
	}
	
	public int taikinInsert(WorkappInfo workappinfo) {
		int insertResult = 0;
		
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		insertResult = Wmapper.taikinInsert(workappinfo);
		
		return insertResult;
		
	}
	
	public int worktimeInsert(String email) {
		int insertResult = 0;
		
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		insertResult = Wmapper.worktimeInsert(email);
		
		return insertResult;
	}
	
	public int vacationInsert(String email) {
		int insertResult=0;
		
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		insertResult = Wmapper.vacationInsert(email);
		
		return insertResult;
	}
	
	public int vacationCheck(String email) {
		int checkResult = 0;

		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		checkResult = Wmapper.vacationCheck(email);

		return checkResult;
	}
	
	public String getComment() {
		String comment="";
		
		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		comment = Wmapper.getComment();
		
		return comment;
	}
	
	public int taikinCheck(String email) {
		int checkResult = 0;

		KintaiUserMapper Wmapper = sqlsession.getMapper(KintaiUserMapper.class);
		checkResult = Wmapper.taikinCheck(email);

		return checkResult;
	}
}
