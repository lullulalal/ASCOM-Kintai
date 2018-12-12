package com.ascom.kintai.mapper;

import java.util.Map;

public interface KintaiSuperAdminMapper {

	public Map getSuperAdminSetting();
	public boolean updateMaxTimeSuperAdminSet(Map set);
	public boolean updateMinTimeSuperAdminSet(Map set);
	public boolean updateNoticeSuperAdminSet(Map set);
	
	public void insertToEmployeeTable(Map info);
	public void insertToAppAcountTable(Map info);
	public void insertToAppSetLanguage(Map info);
	public void insertToAppSetWorkLocation(Map info);
	public void insertToAppSetAuth(Map info);
	
	public void updateToEmployeeTable(Map info);
	public void updateToAppAcountTable(Map info);
	public void updateToAppSetAuth(Map info);
	
}
