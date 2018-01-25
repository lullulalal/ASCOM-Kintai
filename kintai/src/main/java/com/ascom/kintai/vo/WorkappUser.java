package com.ascom.kintai.vo;

import java.util.Date;

public class WorkappUser {
	String email;
	String sessionId;
	Date sessionLimit;
	
	public WorkappUser() {}
	
	public WorkappUser(String email, String sessionId, Date sessionLimit) {
		super();
		this.email = email;
		this.sessionId = sessionId;
		this.sessionLimit = sessionLimit;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSessionId() {
		return sessionId;
	}
	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}
	public Date getSessionLimit() {
		return sessionLimit;
	}
	public void setSessionLimit(Date sessionLimit) {
		this.sessionLimit = sessionLimit;
	}
	
	@Override
	public String toString() {
		return "WorkappUser [email=" + email + ", sessionId=" + sessionId + ", sessionLimit=" + sessionLimit + "]";
	}
	

}
