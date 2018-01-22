package com.ascom.kintai.vo;

public class WorkappSession {
	public String email;
	public String sessionKey;
	public String sessionLimit;

	public WorkappSession() {
		super();
	}

	public WorkappSession(String email, String sessionKey, String sessionLimit) {
		super();
		this.email = email;
		this.sessionKey = sessionKey;
		this.sessionLimit = sessionLimit;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSessionKey() {
		return sessionKey;
	}

	public void setSessionKey(String sessionKey) {
		this.sessionKey = sessionKey;
	}

	public String getSessionLimit() {
		return sessionLimit;
	}

	public void setSessionLimit(String sessionLimit) {
		this.sessionLimit = sessionLimit;
	}

	@Override
	public String toString() {
		return "WorkappSession [email=" + email + ", sessionKey=" + sessionKey + ", sessionLimit=" + sessionLimit + "]";
	}
}
