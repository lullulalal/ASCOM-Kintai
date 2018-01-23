package com.ascom.kintai.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ascom.kintai.dao.KintaiCommonDAO;
import com.ascom.kintai.vo.AppSet;

@Repository
public class KintaiCommonService {
	@Autowired
	KintaiCommonDAO dao;
	
	public Map getText(AppSet appSet, String code){
		String lang = null;
		
		if(appSet == null)
			lang = "JP";
		else
			lang = appSet.getLang();
		
		String text = dao.getText(lang, code);
		
		HashMap<String, String> rtn = new HashMap<>();
		
		rtn.put(code, text);
		
		return rtn;
	}
}
