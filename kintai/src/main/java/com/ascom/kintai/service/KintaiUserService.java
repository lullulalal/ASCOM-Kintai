package com.ascom.kintai.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.dao.KintaiUserDao;
import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class KintaiUserService {

	@Autowired
	KintaiUserDao wdao;

	public ArrayList<Object> workInfo(String email, String date) {
		ArrayList<Object> AllWorkData = wdao.workInfo(email, date);
		System.out.println(AllWorkData.toString());

		return AllWorkData;
	}

	public int UpdateWorkInfo(WorkappInfo updateInfo, AppSet set) {

		String upEndTime = updateInfo.getEndTime();
		String upStartTime = updateInfo.getStartTime();
		
		if("00:00".equals(upEndTime) && "00:00".equals(upStartTime))
			updateInfo.setWorkState("0012");
		
		else
			updateInfo.setWorkState(set.getWorkLocation());
		
		int result = wdao.UpdateWorkInfo(updateInfo);
		
		return result;
	}

	public void updateUserAppWorkLocation(AppSet set, String email) {

		wdao.updateUserAppWorkLocation(set, email);
	}

	public void updateUserAppLanguage(AppSet set, String email) {

		wdao.updateUserAppLanguage(set, email);
	}

	public void updateUserPassword(String pwd, String email) {

		PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String hashedPwd = passwordEncoder.encode(pwd);

		wdao.updateUserPassword(hashedPwd, email);
	}

	public String getCurrentTime() {
		String currentTime = "";
		Calendar cal = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		currentTime = sdf.format(cal.getTime());
		return currentTime;
	}

	public String getComment() {
		String comment = "";
		comment = wdao.getComment();
		return comment;
	}

	public int vacationInsert(String email) {
		int resultVacation = 0;
		
		 Calendar cal = Calendar.getInstance(); 
		 int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK); 
		
		resultVacation = wdao.vacationInsert(email, dayOfWeek);
		return resultVacation;
	}

	public int taikinInsert(String workDate, String endTime, String restTime, String email,String workState) {
		int resultTaikin = 0;

		String new_endTime = workDate + " " + endTime;

		WorkappInfo workappinfo = new WorkappInfo(email, "", "", new_endTime, restTime, "", workState, "", "", "", 0);
		
		resultTaikin = wdao.taikinInsert(workappinfo);
		
		if (resultTaikin == 1) {
			wdao.worktimeInsert(email);
		}
		return resultTaikin;
	}

	public int shukinInsert(String workDate, String startTime, String email, String workState) {
		int resultShukin = 0;
		
		String new_startTime = workDate + " " + startTime;
		
	    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd") ;
	    Date nDate = null;
		
	    try {
			nDate = dateFormat.parse(workDate);
		} catch (ParseException e) {
			e.printStackTrace();
		} 
	     
	    Calendar cal = Calendar.getInstance() ;
	    cal.setTime(nDate);
	     
	    int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK) ;

		WorkappInfo workappinfo = new WorkappInfo(email, workDate, new_startTime, "", "", "", workState, "", "", "", dayOfWeek);

		resultShukin = wdao.shukinInsert(workappinfo);
		
		return resultShukin;
	}
	
	public String currentRestTime(String email){
		return wdao.currentRestTime(email);
	}
}
