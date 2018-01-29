package com.ascom.kintai.mapper;

import java.util.Map;

public interface KintaiSuperAdminMapper {

	public Map getSuperAdminSetting();
	public boolean updateMaxTimeSuperAdminSet(Map set);
	public boolean updateMinTimeSuperAdminSet(Map set);
	public boolean updateNoticeSuperAdminSet(Map set);
}
