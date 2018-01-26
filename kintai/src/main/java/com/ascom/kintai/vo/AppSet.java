package com.ascom.kintai.vo;

public class AppSet {
	String language;
	String workLocation;
	int authority;
	
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getWorkLocation() {
		return workLocation;
	}
	public void setWorkLocation(String workLocation) {
		this.workLocation = workLocation;
	}
	public int getAuthority() {
		return authority;
	}
	public void setAuthority(int authority) {
		this.authority = authority;
	}
	
	@Override
	public String toString() {
		return "AppSet [language=" + language + ", workLocation=" + workLocation + ", authority=" + authority + "]";
	}

}
