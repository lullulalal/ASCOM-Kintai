package com.ascom.kintai.vo;

public class WorkappAppSet {
	public String email;
	public String setting;
	public String setValue;

	public WorkappAppSet() {
		super();
	}

	public WorkappAppSet(String email, String setting, String setValue) {
		super();
		this.email = email;
		this.setting = setting;
		this.setValue = setValue;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSetting() {
		return setting;
	}

	public void setSetting(String setting) {
		this.setting = setting;
	}

	public String getSetValue() {
		return setValue;
	}

	public void setSetValue(String setValue) {
		this.setValue = setValue;
	}

	@Override
	public String toString() {
		return "WorkappAppSet [email=" + email + ", setting=" + setting + ", setValue=" + setValue + "]";
	}

}
