package com.ascom.kintai.mapper;

import java.util.List;

public interface KintaiAdminMapper {
	public List getWorkInfoByDay(String date, String state);
	public List getWorkInfoByMonth(String month, String minTime, String maxTime);
	public List getWorkInfoByMonthDetail(String month, String email, String minTime, String maxTime);
	public List getEmployees();
	public List getWorkInfoByYear(String email, String year, String minTime, String maxTime) ;
}
