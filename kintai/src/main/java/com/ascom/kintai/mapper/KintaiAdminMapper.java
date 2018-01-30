package com.ascom.kintai.mapper;

import java.util.List;

public interface KintaiAdminMapper {
	public List getWorkInfoByDay(String date, String state);
}
