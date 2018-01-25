package com.ascom.kintai.mapper;

import java.util.Date;

import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappUser;

public interface KintaiCommonMapper {
	public String getText(String lang, String code);
	public String getPassword(String email);
	public AppSet getAppSetting(String email);
	public void keepLogin(WorkappUser workappUser);
	public WorkappUser checkUserWithSessionKey(String sessionId);

}
