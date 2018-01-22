package com.ascom.kintai.vo;

public class WorkappSuperAdmin {
	public String setting;
	public String setValue;

	public WorkappSuperAdmin() {
		super();
	}

	public WorkappSuperAdmin(String setting, String setValue) {
		super();
		this.setting = setting;
		this.setValue = setValue;
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
		return "WorkappSuperAdmin [setting=" + setting + ", setValue=" + setValue + "]";
	}

}
