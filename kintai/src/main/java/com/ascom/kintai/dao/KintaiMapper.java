package com.ascom.kintai.dao;

import com.ascom.kintai.vo.WorkappInfo;

public interface KintaiMapper {
	public int shukinCheck(String email);
	public int shukinInsert(WorkappInfo workappinfo);
	public int taikinInsert(WorkappInfo workappinfo);
	public int worktimeInsert(String email);
	public int vacationInsert(String email);
	public int vacationCheck(String email);
}
