package com.ascom.kintai.mapper;

import java.util.List;

public interface KintaiAdminMapper {
	public List getWorkInfoByDay(String date, String state);
	public List getWorkInfoByMonth(String month, String minTime, String maxTime);
	
}
