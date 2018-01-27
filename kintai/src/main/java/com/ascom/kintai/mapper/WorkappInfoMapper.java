package com.ascom.kintai.mapper;

import java.util.ArrayList;

import com.ascom.kintai.vo.WorkappInfo;

public interface WorkappInfoMapper {

	public ArrayList<WorkappInfo> workInfo(String email,String date);
	public int UpdateWorkInfo(WorkappInfo updateInfo);
	public String AllWorkTime(String email,String workData);
}
