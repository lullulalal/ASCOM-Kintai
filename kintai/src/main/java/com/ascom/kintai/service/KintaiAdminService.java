package com.ascom.kintai.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.dao.KintaiAdminDAO;
import com.ascom.kintai.dao.KintaiSuperAdminDAO;
import com.ascom.kintai.vo.WorkappInfo;

@Repository
public class KintaiAdminService {
	
	@Autowired
	KintaiAdminDAO dao;
	@Autowired
	KintaiSuperAdminDAO sdao;
	
	
	public List getWorkInfoByMonth(String month, String state) {
	
		Map saset = sdao.getSuperAdminSetting();
		
		String setMaxTime = ( (String)saset.get("maxTime") ) + ":00";
		String setMinTime = ( (String)saset.get("minTime") ) + ":00";  
		
		String maxTime = null;
		String minTime = null;
		
		if("0062".equals(state)) {
			minTime = setMaxTime;
			maxTime = "24:00:00";
		} else if ("0063".equals(state)) {
			minTime = setMinTime;
			maxTime = setMaxTime;
		} else if ("0064".equals(state)) {
			minTime = "00:00:00";
			maxTime = setMinTime;
		}
		
		List rst = dao.getWorkInfoByMonth(month, minTime, maxTime);
		
		return rst;
	}
	
	@SuppressWarnings("unchecked")
	public Map getWorkInfoByDay(String date, String state) {
		ArrayList<WorkappInfo> badList = null;
		ArrayList<WorkappInfo> warnList = null;
		ArrayList<WorkappInfo> goodList = null;
		ArrayList<WorkappInfo> yasumiList = null;
		
        try
        {
    		List<WorkappInfo> rst = dao.getWorkInfoByDay(date, state);
    		Map saset = sdao.getSuperAdminSetting();
    		
    		String maxTime = date + " " +  ( (String)saset.get("maxTime") ) + ":00";
    		String minTime = date + " " +  ( (String)saset.get("minTime") ) + ":00";   
    		
        	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	        Date maxTimeDate = simpleDateFormat.parse(maxTime);
	        Date minTimeDate = simpleDateFormat.parse(minTime);
			
			badList = new ArrayList<>();
			warnList = new ArrayList<>();
			goodList = new ArrayList<>();
			yasumiList = new ArrayList<>();
			
			for(WorkappInfo wi : rst) {
				String  workedTime = date + " " +  wi.getWorkTime();
				Date workedTimeDate = simpleDateFormat.parse(workedTime);
				
				if( workedTimeDate.getTime() < minTimeDate.getTime() ) {
					String workState = wi.getWorkState();
					if( "0012".equals(workState) )
						yasumiList.add(wi);
					else
						goodList.add(wi);
				}
				else if ( minTimeDate.getTime() <= workedTimeDate.getTime() &&
						workedTimeDate.getTime() < maxTimeDate.getTime()) {
					warnList.add(wi);
				}else {
					badList.add(wi);
				}
			}

        }
        catch (ParseException ex)
        {
            System.out.println("Exception "+ex);
        }
        
		HashMap<String, ArrayList<WorkappInfo>> rtn = new HashMap<>();
		
		Collections.sort(goodList);
		Collections.sort(badList);
		Collections.sort(warnList);
		Collections.sort(yasumiList);
	
		rtn.put("good", goodList);
		rtn.put("bad", badList);
		rtn.put("warn", warnList);
		rtn.put("yasumi", yasumiList);
		
		return rtn;
		
	}
}
