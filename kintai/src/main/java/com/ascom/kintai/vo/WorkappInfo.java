package com.ascom.kintai.vo;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class WorkappInfo implements Comparable {
	public String email;
	public String workDate;
	public String startTime;
	public String endTime;
	public String restTime;
	public String workTime;
	public String workState;
	public String nickName;
	public String firstname;
	public String lastname;
	public int count;

	public WorkappInfo() {
		super();
	}


	public WorkappInfo(String email, String workDate, String startTime, String endTime, String restTime,
			String workTime, String workState, String nickName, String firstname, String lastname) {
		super();
		this.email = email;
		this.workDate = workDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.restTime = restTime;
		this.workTime = workTime;
		this.workState = workState;
		this.nickName = nickName;
		this.firstname = firstname;
		this.lastname = lastname;
		this.count = 0;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWorkDate() {
		return workDate;
	}

	public void setWorkDate(String workDate) {
		this.workDate = workDate;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public String getRestTime() {
		return restTime;
	}

	public void setRestTime(String restTime) {
		this.restTime = restTime;
	}

	public String getWorkTime() {
		return workTime;
	}

	public void setWorkTime(String workTime) {
		this.workTime = workTime;
	}

	public String getWorkState() {
		return workState;
	}

	public void setWorkState(String workState) {
		this.workState = workState;
	}

	public String getNickName() {
		return nickName;
	}

	public void setNickName(String nickName) {
		this.nickName = nickName;
	}



	public int getCount() {
		return count;
	}


	public void setCount(int count) {
		this.count = count;
	}


	@Override
	public String toString() {
		return "WorkappInfo [email=" + email + ", workDate=" + workDate + ", startTime=" + startTime + ", endTime="
				+ endTime + ", restTime=" + restTime + ", workTime=" + workTime + ", workState=" + workState
				+ ", nickName=" + nickName + ", firstname=" + firstname + ", lastname=" + lastname + "]";
	}


	@Override
	public int compareTo(Object compObj) {
		WorkappInfo compInfo = (WorkappInfo)compObj;
		
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String  workTimeThis = this.workDate + " " +  this.workTime;
		String  workTimeComp = compInfo.workDate + " " +  compInfo.workTime;
		Date workTimeThisDate = null;
		Date workTimeCompDate = null;
		
		try {
			workTimeThisDate = simpleDateFormat.parse(workTimeThis);
			workTimeCompDate = simpleDateFormat.parse(workTimeComp);
		} catch (ParseException e) {
			e.printStackTrace();
		}

		
		return (int) ( workTimeCompDate.getTime() -  workTimeThisDate.getTime());
	}
	
}
