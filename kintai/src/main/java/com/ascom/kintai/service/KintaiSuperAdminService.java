package com.ascom.kintai.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.ascom.kintai.dao.KintaiSuperAdminDAO;

@Repository
public class KintaiSuperAdminService {
	@Autowired
	KintaiSuperAdminDAO dao;
	
	public Map getSuperAdminSetting(){

		return dao.getSuperAdminSetting();
	}
	
	public void updateSuperAdminSetting( Map set){

		dao.updateSuperAdminSetting(set);
	}
	
	public void insertEmployee(Map info) {
		dao.insertEmployee(info);
	}
	
	public void updateEmployee(Map info) {
		dao.updateEmployee(info);
	}
	
}
