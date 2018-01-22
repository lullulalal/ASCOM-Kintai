package com.ascom.kintai.vo;

public class WorkappInfo {
	public String email;
	public String workDate;
	public String startTime;
	public String endTime;
	public String restTime;
	public String workTime;

	public WorkappInfo() {
		super();
	}

	public WorkappInfo(String email, String workDate, String startTime, String endTime, String restTime,
			String workTime) {
		super();
		this.email = email;
		this.workDate = workDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.restTime = restTime;
		this.workTime = workTime;
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

	@Override
	public String toString() {
		return "WorkappInfo [email=" + email + ", workDate=" + workDate + ", startTime=" + startTime + ", endTime="
				+ endTime + ", restTime=" + restTime + ", workTime=" + workTime + "]";
	}
}
