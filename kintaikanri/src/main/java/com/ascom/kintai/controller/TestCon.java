package com.ascom.kintai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ascom.kintai.dao.TestDao;
import com.ascom.kintai.vo.TestVo;


@Controller
public class TestCon {

	
	@Autowired
	TestDao dao;
	
	@RequestMapping(value = "test", method = RequestMethod.POST)
	public String test(TestVo testvo) {
		System.out.println(testvo.getName());
		
		dao.insert(testvo);
		
		return "home";
	}
}
