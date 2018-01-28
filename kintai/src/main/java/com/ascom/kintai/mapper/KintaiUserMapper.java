package com.ascom.kintai.mapper;

import java.util.ArrayList;

import com.ascom.kintai.vo.AppSet;
import com.ascom.kintai.vo.WorkappInfo;

public interface KintaiUserMapper {

	public ArrayList<WorkappInfo> workInfo(String email,String date);
	public int UpdateWorkInfo(WorkappInfo updateInfo);
	public String AllWorkTime(String email,String workData);
	public void updateUserAppLanguage(String set, String email) ;
	public void updateUserAppWorkLocation(String set, String email) ;
	public void updateUserPassword(String HashedPwd, String email);
	
}
