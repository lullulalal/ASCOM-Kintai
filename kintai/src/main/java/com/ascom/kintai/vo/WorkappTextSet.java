package com.ascom.kintai.vo;

public class WorkappTextSet {
	public String lang;
	public String code;
	public String text;

	public WorkappTextSet() {
		super();
	}

	public WorkappTextSet(String lang, String code, String text) {
		super();
		this.lang = lang;
		this.code = code;
		this.text = text;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public String toString() {
		return "WorkappTextSet [lang=" + lang + ", code=" + code + ", text=" + text + "]";
	}

}
